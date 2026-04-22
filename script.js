const mobileMenu = document.querySelector('.mobile-menu-btn');
const closureBtn = document.querySelector('.close-btn');
const navContainer = document.querySelector('.nav-container');
const navLinks = document.querySelectorAll('.nav-container a');

const toggleMenu = () => {
    navContainer.classList.toggle('active');
}
mobileMenu.addEventListener('click', toggleMenu);
closureBtn.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navContainer.classList.remove('active');
    });
});