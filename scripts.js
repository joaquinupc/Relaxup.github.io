document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario y los campos de contraseña
    const form = document.querySelector('form');
    const passwordInput = document.querySelector('#contrasena');
    const confirmPasswordInput = document.querySelector('#confirmar-contrasena');
    const successMessage = document.createElement('div');
    successMessage.id = 'registro-exitoso';
    successMessage.textContent = 'REGISTRO EXITOSO';

    // Función para validar la contraseña
    function validarContrasena() {
        const contrasena = passwordInput.value;
        const regExp = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{12,}$/;
        return regExp.test(contrasena);
    }

    // Función para verificar si las contraseñas coinciden
    function verificarContrasenas() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.setCustomValidity('Las contraseñas no coinciden');
        } else {
            confirmPasswordInput.setCustomValidity('');
        }
    }

    // Validar contraseña al perder el foco en el campo
    passwordInput.addEventListener('blur', function() {
        if (!validarContrasena()) {
            passwordInput.setCustomValidity('La contraseña debe tener al menos 12 caracteres, incluyendo al menos una mayúscula, un número y un carácter especial.');
        } else {
            passwordInput.setCustomValidity('');
        }
    });

    // Verificar contraseñas al perder el foco en el campo
    confirmPasswordInput.addEventListener('blur', verificarContrasenas);

    // Verificar contraseñas al enviar el formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Mostrar mensaje de registro exitoso
        document.body.appendChild(successMessage);
        setTimeout(function() {
            // Redireccionar a entrar.html después de 3 segundos
            window.location.href = 'entrar.html';
        }, 3000);
    });
});
