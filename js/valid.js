document.addEventListener('DOMContentLoaded', function () {

    const formulario = document.getElementById('formulario-usuarios');
    const inputs = document.querySelectorAll('#formulario-usuarios input');

    const credencialesValidas = {
        usuario: 'user',
        contraseña: 'contra'
    };


    const expresiones = {
        nomUser: /^[a-zA-Z0-9\_\-]{4,16}$/, 
        contraUser: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
    };

    const campos = {
        nomUser: false,
        contraUser: false
    };


    const validarCampo = (expresion, input, campo) => {
        const campoHTML = document.getElementById(campo);
        const errorHTML = document.getElementById(`${campo}-error`);
        
        if (expresion.test(input.value)) {
            campoHTML.classList.remove('input-error');
            campoHTML.classList.add('input-success');
            errorHTML.textContent = ''; // Limpiar mensaje de error
            campos[campo] = true;
        } else {
            campoHTML.classList.remove('input-success');
            campoHTML.classList.add('input-error');
            errorHTML.textContent = `El campo ${campo} no es válido.`; // Mostrar mensaje de error
            campos[campo] = false;
        }
    };

    // Función para validar el formulario en tiempo real
    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "nomUser":
                validarCampo(expresiones.nomUser, e.target, 'nomUser');
                break;
            case "contraUser":
                validarCampo(expresiones.contraUser, e.target, 'contraUser');
                break;
        }
    };

    // Añadir eventos para validar campos al escribir o perder el foco
    inputs.forEach(input => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });
});