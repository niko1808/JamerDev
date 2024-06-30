document.getElementById('contacto-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Formulario enviado. Gracias por contactarme!');
});

// Script para el efecto carrusel
window.onload = function() {
    const carousel = document.querySelector('.carousel');
    const text = document.querySelector('.carousel-text');
    const textWidth = text.offsetWidth;
    const containerWidth = carousel.offsetWidth;
    let position = containerWidth;

    function animate() {
        position -= 3.0;  // Ajusta esta velocidad para hacer el movimiento más lento
        if (position < -textWidth) {
            position = containerWidth;
        }
        text.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
    }

    animate();
}

// Script para mostrar y ocultar descripciones de habilidades con transición
const skillDescriptions = {
    html: "HTML5 es el lenguaje de marcado estándar para crear páginas web. Se utiliza para estructurar el contenido en la web.",
    css: "CSS3 es el lenguaje de estilos que se utiliza para describir la presentación de documentos escritos en HTML o XML.",
    js: "JavaScript es un lenguaje de programación que permite crear contenido dinámico y interactivo en las páginas web."
};

document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('click', function() {
        const skillKey = this.getAttribute('data-skill');
        const descriptionText = skillDescriptions[skillKey];
        const descriptionContainer = document.getElementById('skill-description-container');
        const existingDescription = document.querySelector(`#${skillKey}-description`);

        // Si la descripción ya está visible, la oculta con transición
        if (existingDescription && existingDescription.classList.contains('show')) {
            existingDescription.classList.remove('show');
            setTimeout(() => {
                existingDescription.remove();
            }, 1000); // Esperar a que termine la transición antes de eliminar completamente
        } else {
            // Limpiar descripciones previas
            descriptionContainer.innerHTML = '';

            // Crear nuevo div para la descripción
            const descriptionDiv = document.createElement('div');
            descriptionDiv.className = 'skill-description';
            descriptionDiv.id = `${skillKey}-description`;
            descriptionDiv.textContent = descriptionText;

            // Agregar la nueva descripción al contenedor
            descriptionContainer.appendChild(descriptionDiv);

            // Mostrar la descripción con transición
            setTimeout(() => {
                descriptionDiv.classList.add('show');
            }, 100); // Pequeño retraso para asegurar que se aplique la transición correctamente
        }
    });
});
