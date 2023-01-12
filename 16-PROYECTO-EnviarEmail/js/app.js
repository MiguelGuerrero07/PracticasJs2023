document.querySelector('DOMContenentLoad',function () {

    const inputEmail    = document.querySelector('#email');
    const inputAsunto   = document.querySelector('#asunto');
    const inputMensaje  = document.querySelector('#mensaje');
    const formulario    = document.querySelector('#formulario');

    //ASIGNA EVENTOS
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
    
    function validar(e){
        
        if(e.target.value.trim() === '') {   
            mostraralerta('El campo email es obligatorio');
        }else{
            
        }
    }

    function mostraralerta(mensaje){
        //Generar alert
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600','text-white','p-2','text-center');

        // Inyectar el error al formulario

        formulario.appendChild(error);


    }

});