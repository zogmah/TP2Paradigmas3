const hamburgerIcon = document.getElementById('menu-hamburguesa');
const menu = document.querySelector('.menu');

// Añadir un event listener para abrir/cerrar el menú
hamburgerIcon.addEventListener('click', () => {
    menu.classList.toggle('show'); // Añade o quita la clase 'show'
});

// Opcional: Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !hamburgerIcon.contains(e.target)) {
        menu.classList.remove('show');
    }
});