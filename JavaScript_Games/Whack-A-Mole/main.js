const gridEle = document.getElementById('grid');

// Creating the grid layout of the board.
for(let i = 1; i <= 9; i++)
{
    let divTag = document.createElement('div');
    divTag.setAttribute('class', 'square');
    divTag.setAttribute('id', i);

    gridEle.appendChild(divTag);
}    




/* ========================== LOGIC OF THE GAME ================================== */


let squares = document.querySelectorAll('.square'),       //An array containing all the elements with class 'square'
      mole = document.querySelector('.mole'),
      timeLeft = document.querySelector('#time-left'),
      score = document.querySelector('#score');


let result = 0,
    currentTime = 60,
    hitPosition, 
    randomPosition;

// This function will randomly place the mole in different squares
function randomSquare(){

    // We need to remove the previous-mole before adding new-one to the grid
    squares.forEach(square => {
        square.classList.remove('mole')
    })



    randomPosition = squares[Math.floor((Math.random() * 9))]
    // console.log(randomPosition);
    // console.log(Math.floor(Math.random() * 9));
    randomPosition.classList.add('mole')

    hitPosition = randomPosition.id;
    // console.log(hitPosition);

}

squares.forEach(square => {
    square.addEventListener('click', () => {

        // if the id of the random square is equal to our hitPosition
        if(square.id == hitPosition){

            // Incrementing the result
            result++;
            
            // Updating the score
            score.innerText = result;

            // Agin resetin gthe hitPosition for the next hit.
            hitPosition = null;
        }
    })
})

let stopMole;

function moleMove(){
    // randomSquare function will called after every 1s to keep changing the position of the mole.
    stopMole = setInterval(randomSquare, 1000);
}

moleMove(); 


function countDown(){
    currentTime--;
    timeLeft.innerText = currentTime;

    // when the timer hits-0
    if(currentTime == 0){

        // when the timer hits-0, stop the timer
        clearInterval(stopTimer);

        // when the timer hits-0, stop the mole from changing its position
        clearInterval(stopMole);

        // removing the mole from the grid when the timer stops
        randomPosition.classList.remove('mole')

        // providing an alert message
        alert(`Times up!, you're score is ${result}.`)
    }
}

let stopTimer = setInterval(countDown, 1000);