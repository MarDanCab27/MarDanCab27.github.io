// Manejar el clic en el botón de ingresar
document.getElementById('ingresar').addEventListener('click', (e) => {
    e.preventDefault(); // Evitar el comportamiento por defecto del botón

    // Obtener los valores ingresados
    const usuarioIngresado = document.getElementById('nomUser').value;
    const contraseñaIngresada = document.getElementById('contraUser').value;

    // Validar credenciales
    if (usuarioIngresado === credencialesValidas.usuario && contraseñaIngresada === credencialesValidas.contraseña) {
        alert('Inicio de sesión exitoso.');
        window.location.href = 'menuAdmin.html'; // Redirigir a la página de destino
    } else {
        alert('Credenciales incorrectas. Por favor, intente de nuevo.');
    }
});