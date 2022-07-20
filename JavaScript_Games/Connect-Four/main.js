document.addEventListener('DOMContentLoaded', () => {

    const grid = document.querySelector('.grid');

    for(let i = 0 ; i <42; i++){
        debugger;
        const innerDiv = document.createElement('div');

        if(i < 35){
            grid.appendChild(innerDiv)
        }

        else{
            innerDiv.setAttribute('class', 'taken');
            grid.appendChild(innerDiv)
        }
    }



    const squares = document.querySelectorAll('.grid div')

});