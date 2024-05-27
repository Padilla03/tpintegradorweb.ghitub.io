document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const mensajeInput = document.getElementById('mensaje');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        const nombre = nombreInput.value.trim();
        const email = emailInput.value.trim();
        const mensaje = mensajeInput.value.trim();

        // Validaciones
        const nombreValido = validarNombre(nombre);
        const emailValido = validarEmail(email);
        const mensajeValido = validarMensaje(mensaje);

        if (nombreValido && emailValido && mensajeValido) {
            // Si los datos son válidos, mostrar los datos enviados
            mostrarDatosEnviados(nombre, email, mensaje);
        } else {
            // Si hay errores, mostrarlos
            mostrarErrores(nombreValido, emailValido, mensajeValido);
        }
    });

    function validarNombre(nombre) {
        return nombre.length > 0 && nombre.length <= 50;
    }

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validarMensaje(mensaje) {
        return mensaje.length > 0 && mensaje.length <= 500;
    }

    function mostrarDatosEnviados(nombre, email, mensaje) {
        const datosEnviados = document.createElement('div');
        datosEnviados.classList.add('datos-enviados');
        datosEnviados.innerHTML = `
            <h3>Datos Enviados</h3>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong> ${mensaje}</p>
        `;
        form.parentNode.appendChild(datosEnviados);
        form.reset();
    }

    function mostrarErrores(nombreValido, emailValido, mensajeValido) {
        let errores = '';

        if (!nombreValido) {
            errores += '<p>El nombre debe tener entre 1 y 50 caracteres.</p>';
        }

        if (!emailValido) {
            errores += '<p>El email no es válido.</p>';
        }

        if (!mensajeValido) {
            errores += '<p>El mensaje debe tener entre 1 y 500 caracteres.</p>';
        }

        const erroresDiv = document.createElement('div');
        erroresDiv.classList.add('errores');
        erroresDiv.innerHTML = errores;

        const existingErrores = document.querySelector('.errores');
        if (existingErrores) {
            existingErrores.remove();
        }

        form.parentNode.insertBefore(erroresDiv, form);
    }
});
