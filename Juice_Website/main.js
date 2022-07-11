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

