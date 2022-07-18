let grid = document.querySelector('.grid');
// console.log(grid);

const blockWidth = 100;
const blockHeight = 20;

const userStartPosition = [230, 10];
const userCurrentPosition = userStartPosition;

//class to provide position to each block.
class Block{
    //This contructor will provide the specific position to each and every block
    constructor(xAxis, yAxis){
        this.bottomLeft = [xAxis,  yAxis];
        // this.bottomRight = [xAxis + blockWidth, yAxis];
        // this.topLeft = [xAxis, yAxis + blockHeight ]
        // this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
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

//add user
const user = document.createElement('div');
user.classList.add('user')

//setting the postion of the user by assigning the left and bottom attributes
user.style.left = userCurrentPosition[0] + 'px';
user.style.bottom = userCurrentPosition[1] + 'px';

grid.appendChild(user)