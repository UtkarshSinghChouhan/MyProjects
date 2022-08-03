const bar = document.getElementById('bar'),
      nav = document.getElementById('navbar'),
      close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

const pro = Array.from(document.querySelectorAll('.pro'));
console.log(pro);

for(let i = 0; i < pro.length; i++ ){
    pro[i].addEventListener('click', () => {
        window.location.href = 'singleProductPage.html';
    })
}



/*====== SingleProductPage.html =================*/
var mainImg = document.getElementById('MainImg'),
smallImg = document.getElementsByClassName('small-img');

for(let i = 0; i < 4; i++){
smallImg[i].onclick = function(){
    mainImg.src = smallImg[i].src
} 
}