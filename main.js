const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-links');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.toggle('open');
        navMenu.classList.toggle('active');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        navMenu.classList.remove('active');
        menuOpen = false;
    }
});

