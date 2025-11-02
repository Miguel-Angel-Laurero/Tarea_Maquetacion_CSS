document.addEventListener('DOMContentLoaded', () => {
    const tooltip = document.getElementById('tooltip');
    const overlay = document.getElementById('city-overlay');
    const cityImg = document.getElementById('city-img');
    const cityTitle = document.getElementById('city-title');
    const cityDescription = document.getElementById('city-description');

    // Mostrar tooltip y abrir ventana
    document.querySelectorAll('.city').forEach(city => {
    city.addEventListener('mouseenter', () => {
        tooltip.style.display = 'block';
        tooltip.innerText = city.dataset.name + ": " + city.dataset.info;
    });
    city.addEventListener('mousemove', e => {
        tooltip.style.top = (e.pageY - 40) + 'px';
        tooltip.style.left = (e.pageX + 10) + 'px';
    });
    city.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });

    // Al hacer clic: mostrar ventana con imagen + texto
    city.addEventListener('click', () => {
        cityImg.src = "../img/ciudades/" + city.dataset.name + ".png";
        cityTitle.textContent = city.dataset.name;
        cityDescription.textContent = city.dataset.info;
        overlay.style.display = 'flex';
    });
    });

    // Cerrar al hacer clic fuera
    overlay.addEventListener('click', e => {
    if (!e.target.closest('.city-popup')) {
        overlay.style.display = 'none';
        cityImg.src = "";
    }
    });

    // Cerrar con tecla ESC
    document.addEventListener('keydown', e => {
    if (e.key === "Escape") {
        overlay.style.display = 'none';
        cityImg.src = "";
    }
    });
});