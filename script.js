const mobileMenu = document.querySelector('.mobile-menu-btn');
const navContainer = document.querySelector('.nav-container');
const navLinks = document.querySelectorAll('.nav-container a');

const toggleMenu = () => {

    if (navContainer.classList.contains('active')) {
        navContainer.classList.remove('active');
        mobileMenu.textContent = '☰';
        console.log('Menu opened');
    } 
    else {
        navContainer.classList.add('active');
        mobileMenu.textContent = 'X';
        console.log('Menu closed');
    } 
}
mobileMenu.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navContainer.classList.remove('active');
        mobileMenu.textContent = '☰';
    });
});