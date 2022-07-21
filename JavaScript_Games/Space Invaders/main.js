// Here we have used 'DomContentLoaded' event for the JavaScript to load

document.addEventListener('DOMContentLoaded',() => {
    
    const grid = document.querySelector('.grid')
    const width = 15;
    let shooterCurrentPosition = 202;      //'202' represent the 202th square postion in the grid.



    for(let i = 0; i < 225; i++){
        const square = document.createElement('div');
        grid.appendChild(square);
    }


    const squares = Array.from(document.querySelectorAll('.grid div'));


    // Array containing the position of all the invaders, where we want to place them in the grid.
    const alienInvaders = [
        0,1,2,3,4,5,6,7,8,9,
        15,16,17,18,19,20,21,22,23,24,
        30,31,32,33,34,35,36,37,38,39
    ]


    // function to draw the invaders.
    function drawInvader(){
        for(let i = 0; i < alienInvaders.length; i++){      //UnderStood Clearly
            squares[alienInvaders[i]].classList.add('invader')
        }
    }

    drawInvader();

    function removeInvader(){
        for(let i = 0; i < alienInvaders.length; i++){      //UnderStood Clearly
            squares[alienInvaders[i]].classList.remove('invader')
        }
    }


    // Creating the shooter and positioning it.
    squares[shooterCurrentPosition].classList.add('shooter')

    //function for the motion of the shooter
    function moveShooter(e){
        squares[shooterCurrentPosition].classList.remove('shooter');
        switch(e.key){
            
            case 'ArrowLeft':
                if(shooterCurrentPosition % width != 0){    
                    shooterCurrentPosition -= 1;
                }

                break;

            case 'ArrowRight':
                if(shooterCurrentPosition % width < width -1){      
                    shooterCurrentPosition += 1;
                }
                break;
            }

            squares[shooterCurrentPosition].classList.add('shooter');
        }

    document.addEventListener('keydown', moveShooter);


    // Function to move the invaders

    function moveInvaders(){
        const left = alienInvaders[0] % 15 === 0;
        const right =  alienInvaders[alienInvaders.length - 1] % width === width -1;

        removeInvader();
    }


});