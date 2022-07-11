/* =====================  SHOW MENU =============================  */
const navMenu = document.getElementById('nav__menu'),
      navToggle = document.getElementById('nav__toggle'),
      navClose = document.getElementById('nav__close');

/*===== MENU SHOW =====*/
    /* Validate if constant exists */
    if(navToggle){
        navToggle.addEventListener('click', () =>{
           navMenu.classList.add('show-menu');
        });
    }

/*===== MENU HIDDEN =====*/
    /* Validate if constant exists */
    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }


/* =====================  REMOVE MENU MOBILE =============================  */
    const navLink = document.querySelectorAll('.nav__link')

    function linkAction(){
        const navMenu = document.getElementById('nav__menu')
        // When we click on each nav__link, we remove the show_menu class
        navMenu.classList.remove('show-menu')
    }
    
    navLink.forEach((element) => {
        element.addEventListener('click', linkAction)
    });


/* =====================  GSAP ANIMATION =============================  */

TweenMax.from('.home__title', 1, {delay:0.2, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home__description', 1, {delay:0.3, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home__button', 1, {delay:0.4, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home__liquid', 1, {delay:0.7, opacity: 0, y: 200, ease: Expo.easeInOut})
TweenMax.from('.home__juice-animate', 1, {delay:1.2, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__apple1', 1, {delay:1.5, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__apple2', 1, {delay:1.6, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(1)', 1, {delay:1.3, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(2)', 1, {delay:1.4, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(3)', 1, {delay:1.5, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(4)', 1, {delay:1.6, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(5)', 1, {delay:1.7, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(6)', 1, {delay:1.8, opacity: 0, y: -800, ease: Expo.easeInOut})