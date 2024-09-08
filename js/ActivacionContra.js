// Obtenemos el checkbox, el input de contraseña y el label
const checkAdmin = document.getElementById('checkadmin');
const passwordInput = document.getElementById('contraAdmin');
const passwordLabel = document.getElementById('labelPassword');

// Evento para activar/desactivar el campo de contraseña
checkAdmin.addEventListener('change', function() {
    if (checkAdmin.checked) {
        // Si el checkbox está marcado, habilitamos el campo de contraseña y el label
        passwordInput.disabled = false;
        passwordLabel.classList.remove('disabled');
        passwordLabel.classList.add('enabled');
    } else {
        // Si no está marcado, deshabilitamos el campo de contraseña y el label
        passwordInput.disabled = true;
        passwordLabel.classList.remove('enabled');
        passwordLabel.classList.add('disabled');
    }
});