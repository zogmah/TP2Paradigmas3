/* MENU HAMBURGUESA */

const hamburgerIcon = document.getElementById('menu-hamburguesa');
const menu = document.querySelector('.menu');

// Un listener para abrir/cerrar el menú
hamburgerIcon.addEventListener('click', () => {
    menu.classList.toggle('show');
});


/* ANIMACIÓN MENÚ HAMBURGUESA */

const menuToggle = document.querySelector(".fa-bars");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
});

// Un listener para cerrar el menú en caso de que se haga clic fuera de él
document.addEventListener("click", function (event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);

    // Si el clic fue fuera del menú y del ícono de hamburguesa, cierra el menú
    if (!isClickInsideMenu && !isClickOnToggle) {
        menu.classList.remove("menu-active");
    }
});