
// Array of objects
const cardArray = [
    {
        name : 'fries',
        img : 'Images/fries.png'
    },

    {
        name : 'cheeseburger',
        img : 'Images/cheeseburger.png'
    },

    {
        name : 'hotdog',
        img : 'Images/hotdog.png'
    },

    {
        name : 'ice-cream',
        img : 'Images/ice-cream.png'
    },

    {
        name : 'milkshake',
        img : 'Images/milkshake.png'
    },

    {
        name : 'pizza',
        img : 'Images/pizza.png'
    },

    // We need another 6 cards (i.e., total 12 cards with 2 matching each time)
    {
        name : 'fries',
        img : 'Images/fries.png'
    },

    {
        name : 'cheeseburger',
        img : 'Images/cheeseburger.png'
    },

    {
        name : 'hotdog',
        img : 'Images/hotdog.png'
    },

    {
        name : 'ice-cream',
        img : 'Images/ice-cream.png'
    },

    {
        name : 'milkshake',
        img : 'Images/milkshake.png'
    },

    {
        name : 'pizza',
        img : 'Images/pizza.png'
    }
]

// Now to sort the array randomly
    cardArray.sort(() => {return (0.5 - Math.random())});

    

// Now the array is sorted randomly and it will return array sorted randonly each time.
// console.log(cardArray);


const gridDisplay = document.getElementById('grid') ,
      resultDisplay = document.getElementById('result');


let cardChoosenName = [];     //creating an empty array to store the 'name'
let cardChoosenId = [];     //creating an empty array to store the 'id'
let cardWon = [];       //creating an empty array to keep the name of the cards matched.

function createBoard(){
    for(let i = 0; i < cardArray.length; i++) {
       const card =  document.createElement('img');
       card.setAttribute('src', 'Images/blank.png')
       card.setAttribute('data-id', i)

       gridDisplay.appendChild(card);

       card.addEventListener('click', flipCard);
    }
}
createBoard();



function checkMatch(){

    //'cards' array contains all the elements of the #grid div
    const cards = document.querySelectorAll('#grid img');

    console.log('checking for a match...');

    //if user clicks the same card twice
    if(cardChoosenId[0] == cardChoosenId[1])
    {
        alert('You have clicked the same card twice!!');
    }


    //if the two cards matches.
    if(cardChoosenName[0] === cardChoosenName[1]){
        alert('You have got a match!🥳')

       //if the two cards matches, we are making the background white.
       cards[cardChoosenId[0]].setAttribute('src', 'Images/white.png')
       cards[cardChoosenId[1]].setAttribute('src', 'Images/white.png')

       //further we also need to remove the EventListener from the already clicked cards.
       cards[cardChoosenId[0]].removeEventListener('click', flipCard)
       cards[cardChoosenId[1]].removeEventListener('click', flipCard)

       //Here we are pushing the name of the matched cards in the 'cardWon' array
       cardWon.push(cardChoosenName[0]);
       console.log(cardWon);

       //Updating the score
       resultDisplay.innerHTML = cardWon.length;
    }
    
    
    //if the cards chosen are different.
    else{
        //if the cards chosen are different, we need to again flip the cards.
        cards[cardChoosenId[0]].setAttribute('src', 'Images/blank.png')
        cards[cardChoosenId[1]].setAttribute('src', 'Images/blank.png')
        alert('Sorry Try again 😢')
    }



    //After one attempt we are again emptying the two arrays to reset for the another attempt.
    cardChoosenName = [];
    cardChoosenId = [];

    //If we get all the cards right
    if(cardWon.length == cardArray.length/2){
        resultDisplay.innerText = `Hurray🥳 You've found em all!`
    }
}


function flipCard(){
    // console.log(cardArray);
    const cardId = this.getAttribute('data-id');        //this-keyword returns the element on which we clicked
    // console.log(cardArray[cardId].name);
    cardChoosenName.push(cardArray[cardId].name);
    cardChoosenId.push(cardId);
    // console.log(cardChoosenId);
    // console.log(cardChoosen);
    // console.log('clicked!', cardId);
    this.setAttribute('src', cardArray[cardId].img)
    if(cardChoosenName.length === 2){
        setTimeout(checkMatch, 500)
    }
}