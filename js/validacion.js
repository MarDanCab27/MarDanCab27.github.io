const formulario = document.getElementById('formulario-usuarios');
const inputs = document.querySelectorAll('#formulario-usuarios input');

const expresiones = {
    nombre : /^[a-zA-Z0-9\_\-]{4,16}$/,
    apellido : /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
    correo : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/,
    eda : /^[0-9]{1,3}$/,
}

const validarFormulario = (e)=>{
    switch(e.target.name){
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
               
            }
            else{
                document.getElementById('grupo-nombre').classList.add('abm-correcto');
                console.log("mal");
            }
        break;

        case "correo":

        break;
        
        case "edad":

        break;
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e)=> {
    e.preventDefault();

});