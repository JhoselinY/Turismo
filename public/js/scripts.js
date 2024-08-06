document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formulario-contacto');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        form.reset();
    });
});