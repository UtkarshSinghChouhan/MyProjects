let grid = document.querySelector('.grid');
let score = document.querySelector('.score');
// let gridPosition = grid.getBoundingClientRect();
// console.log(grid);
let gridWidth = 560;
let gridHeight = 400;


const ballDiameter = 20; //since the width and height is 20px

let timerId;
let xDirection = 2;
let yDirection = 2;

const blockWidth = 100;
const blockHeight = 20;

const userStartPosition = [230, 10];
let userCurrentPosition = userStartPosition;

const ballStartPosition = [270,40];
let ballCurrentPosition = ballStartPosition;

//class to provide position to each block.
class Block{
    //This contructor will provide the specific position to each and every block
    constructor(xAxis, yAxis){
        this.bottomLeft = [xAxis,  yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topLeft = [xAxis, yAxis + blockHeight ]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}
 
//Array of 15 Blocks
const blocks = [
    new Block(10, 370),
    new Block(120, 370),
    new Block(230, 370),
    new Block(340, 370),
    new Block(450, 370),

    new Block(10, 340),
    new Block(120, 340),
    new Block(230, 340),
    new Block(340, 340),
    new Block(450, 340),

    new Block(10, 310),
    new Block(120, 310),
    new Block(230, 310),
    new Block(340, 310),
    new Block(450, 310),
]
// console.log(blocks[0]);

// creating the block and adding into the partent container 'grid'
function addBlocks(){
    for(let i = 0; i < blocks.length; i++){
        const block = document.createElement('div')
        // console.log(block.classList);
    
        block.classList.add('block')

        //as the positon of the block has been set 'absolute', we are now setting the 'left' and the 'bottom' property.
        block.style.left = blocks[i].bottomLeft[0] + 'px';
        block.style.bottom = blocks[i].bottomLeft[1] + 'px'; 
    
        grid.appendChild(block)
    }
}

addBlocks();





//creating user block
const user = document.createElement('div');
user.classList.add('user')

positionUser();

grid.appendChild(user)





//position user
function positionUser(){
    //setting the postion of the user by assigning the left and bottom attributes
    user.style.left = userCurrentPosition[0] + 'px';
    user.style.bottom = userCurrentPosition[1] + 'px';
}




function moveUser(e){
    // console.log(e.key);
    switch(e.key){
        case 'ArrowLeft':
            if(userCurrentPosition[0] > 0){
                userCurrentPosition[0] -= 10;
                positionUser();
            }
            
            break;

        case 'ArrowRight':
            if(userCurrentPosition[0] < gridWidth - blockWidth){
                userCurrentPosition[0] += 10;
                positionUser();
            }
            
            break;
    }
}


// for the motion of the user left and right 
document.addEventListener('keydown', moveUser);








//creating and adding the ball
const ball = document.createElement('div');
ball.classList.add('ball');
positionBall();
grid.appendChild(ball)



//position ball
function positionBall(){
    //setting the postion of the ball by assigning the left and bottom attributes
    ball.style.left = ballCurrentPosition[0] + 'px'
    ball.style.bottom = ballCurrentPosition[1] + 'px'    
}


//move Ball
function moveBall(){
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    positionBall();
    checkForCollisions();
}

timerId = setInterval(moveBall,30);


//check for collision
function checkForCollisions(){

    //check for blocks collisions
    for(let i = 0; i < blocks.length; i++){
        if(
            (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) &&
            (ballCurrentPosition[1] + ballDiameter > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].bottomRight[1])                        
        ){
            const allBlocks = Array.from(document.querySelectorAll('.block'));
            allBlocks[i].classList.remove('block');
            allBlocks.splice(i, 1)
        }
    }

    //check for wall collisions
    if( 
        (ballCurrentPosition[0] >= (gridWidth - ballDiameter)) ||
        (ballCurrentPosition[1] >= (gridHeight - ballDiameter)) ||
        (ballCurrentPosition[0] <= 0)
       ){
        changeDirection();
    }

    // check for gameOver
    if(ballCurrentPosition[1] <= 0){
        clearInterval(timerId);
        score.innerHTML = 'You Lose!';

        // Now we are removing the eventListener form the user, so that after game is over we won't be able to move the user.
        document.removeEventListener('keydown', moveUser)
    }
}

// function to change direction
function changeDirection(){
    if(xDirection === 2 && yDirection === 2){
        yDirection = -2;
        return;
    }

    if(xDirection === 2 && yDirection === -2){
        xDirection = -2;
        return;
    }

    if(xDirection === -2 && yDirection === -2){
        yDirection = 2;
        return;
    }

    if(xDirection === -2 && yDirection === 2){
        xDirection = 2;
        return;
    }
}