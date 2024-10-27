const formulario = document.getElementById('formulario-usuarios');
const inputs = document.querySelectorAll('#formulario-usuarios input');

const expresiones = {
    dni : /^\d{7,8}$/, //de 7 a 8 numeros
    nombre : /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // letras   
    apellido : /^[a-zA-ZÀ-ÿ\s]{1,40}$/ // letras
}

const campos = {
    dni : false,
    nombre : false,
    apellido : false
}




const validarFormulario = (e)=>{
    switch(e.target.name){
        case "dni":
            validarCampo(expresiones.dni, e.target, 'dni');
        break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;

        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido');
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.querySelector(`.abm_${campo}`).classList.remove('abm-incorrecto');
        document.querySelector(`.abm_${campo}`).classList.add('abm-correcto');
        campos[campo] = true;
    }else{
        document.querySelector(`.abm_${campo}`).classList.add('abm-incorrecto');
        document.querySelector(`.abm_${campo}`).classList.remove('abm-correcto');
        campos[campo] = false;    
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e)=> {
    e.preventDefault();
    if(campos.dni && campos.nombre && campos.apellido){
        formulario.onsubmit();
    }else{
        alert('Por favor, completa correctamente todos los campos');
    }

});