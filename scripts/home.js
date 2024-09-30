// // JavaScript to toggle the visibility of the menu
// const hamburger = document.getElementById('hamburger');
// const navMenu = document.getElementById('navMenu');

// hamburger.addEventListener('click', () => {
//     navMenu.querySelector('ul').classList.toggle('show');
// });

// Toggle the 'show' class on the nav-menu when hamburger is clicked
document.getElementById('hamburger').addEventListener('click', function() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('show');
});
