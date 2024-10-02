// JavaScript to toggle the visibility of the menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.querySelector('ul').classList.toggle('show');
});

