// FUnctions Used in this :

// .getElementById
// .querrySelectorAll
// .forEach()
// .addEventListener()
// .innerHTML
// e.target.id
// Math.floor()
// Math.random()


const computerChoiceDisplay = document.getElementById('computer-choice'),
      userChoiceDisplay = document.getElementById('user-choice'),
      resultDisplay = document.getElementById('result');


const possibleChoices = document.querySelectorAll('button');

let  userChoice;
let  computerChoice;
let  result;

possibleChoices.forEach(possibleChoice =>  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice ;
    generateComputerChoice();
    getResult();
}) );

function generateComputerChoice(){
    const random = Math.floor((Math.random() * 3) + 1);

    if(random === 1){
    computerChoice = 'rock';
    }

    if(random === 2){
    computerChoice = 'paper';
    }
    if(random === 3){
    computerChoice = 'scissors';
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    if(computerChoice === userChoice){
        result = 'its a draw!';
    }


    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'you win!';
    }
    if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'you lost!';
    }


    if(computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'you win!';
    }
    if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'you lost!';
    }


    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'you lost!';
    }
    if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'you win!';
    }
    

    resultDisplay.innerHTML = result;
}