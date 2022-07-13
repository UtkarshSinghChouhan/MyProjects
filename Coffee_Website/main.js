// ======================== MENU SHOW AND HIDDEN ===============

const navMenu = document.getElementById('nav__menu'),      
      navToggle = document.getElementById('nav__toggle'),
      closeMenu = document.getElementById('nav__close')

      
//SHOW

navToggle.addEventListener('click', () => {
    navMenu.classList.add('show');
});

// HIDDEN
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
});