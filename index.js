const hamburger = document.querySelector('#hamburger');
const hamburgerClose = document.querySelector('#hamburger-close');
const mobileMenu = document.querySelector('#mobile-menu');
const mobileNav = document.querySelector('#mobile-nav');
const overlay = document.querySelector('#overlay');

hamburger.addEventListener('click', () => {
    hamburger.style.display='none';
    hamburgerClose.style.display='inline-block'
    mobileMenu.style.display='flex';
    overlay.style.display='block';
})

hamburgerClose.addEventListener('click', () => {
    hamburger.style.display='inline-block';
    hamburgerClose.style.display='none';
    mobileMenu.style.display='none';
    overlay.style.display='none';
})


    mobileNav.addEventListener('click', () => {
        hamburger.style.display='inline-block';
        hamburgerClose.style.display='none';
        mobileMenu.style.display='none';
        overlay.style.display='none';
    })
;