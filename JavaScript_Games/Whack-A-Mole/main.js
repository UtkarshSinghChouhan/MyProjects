const gridEle = document.getElementById('grid');



for(let i = 1; i <= 9; i++)
{
    let divTag = document.createElement('div');
    divTag.setAttribute('class', 'square');
    divTag.setAttribute('id', i);

    gridEle.appendChild(divTag);
}    




let squares = document.querySelectorAll('.square'),       //An array containing all the elements with class 'square'
      mole = document.querySelector('.mole'),
      timeLeft = document.querySelector('#time-left'),
      score = document.querySelector('#score');


let result = 0,
    hitPosition; 

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomPosition = squares[Math.floor((Math.random() * 9))]
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

setInterval(randomSquare, 1000);

