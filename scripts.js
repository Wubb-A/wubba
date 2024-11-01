const menuToggle = document.querySelector('.menu-toggle');
const navActive = document.querySelector('.nav-active');

menuToggle.addEventListener('click', () => {
    navActive.classList.toggle('active'); // Cambia la clase 'active' en el menú
});