document.addEventListener('DOMContentLoaded', () => {


    const textAreaEle = document.getElementById('textarea');
    const totalCounterEle = document.getElementById('total-counter');
    const remainingCounterEle = document.getElementById('remaining-counter');


    textAreaEle.addEventListener('keyup',updateCounter);

    function updateCounter(){
        totalCounterEle.innerHTML = textAreaEle.value.length;
        let updateValue = remainingCounterEle.innerHTML - 1;
        remainingCounterEle.innerHTML = updateValue;
    }
});