const formulario = document.getElementById('formulario-usuarios');
const inputs = document.querySelectorAll('#formulario-usuarios input');

const expresiones = {
    usuario : /^[a-zA-Z0-9\_\-]{4,16}$/,
    nombre : /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    correo : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/,  
}

const campos = {
    usuario : false,
    nombre : false,
    correo : false,
}

validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)){
        document.getElementById(`${campo}`).classList
    }
}

const validarABM= (e)=>{
    switch(e.target.name){
        case "usuario":
            validarCampo
        break;
    }
}
