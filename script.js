document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        // Número de WhatsApp actualizado con formato correcto
        const whatsappNumber = '5219613295631';

        // Crear el mensaje template mejorado
        const templateMessage = `¡Hola! Soy ${nombre}.\n\nEmail: ${email}\n\nMensaje: ${mensaje}\n\nMe gustaría recibir más información sobre tus productos y servicios.\n\nSaludos desde San Pedro Nichtalucum, El Bosque, Chiapas.`;

        // Codificar el mensaje para la URL
        const encodedMessage = encodeURIComponent(templateMessage);

        // Crear el enlace de WhatsApp
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Abrir WhatsApp en una nueva pestaña
        window.open(whatsappUrl, '_blank');

        // Limpiar el formulario
        contactForm.reset();

        // Mostrar mensaje de éxito
        alert('¡Gracias por tu mensaje! Serás redirigido a WhatsApp para completar el contacto.');
    });
});