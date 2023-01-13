
    const email  = {
        email: ' ' ,
        asunto: ' ',
        mensaje: '  '

    }

    const inputEmail    = document.querySelector("#email");
    const inputAsunto   = document.querySelector("#asunto");
    const inputMensaje  = document.querySelector("#mensaje");
    const formulario    = document.querySelector("#formulario");
    const btnSubmit     = document.querySelector('#formulario button [type= "Submit"]');
    const btnReset      = document.querySelector('#formulario button [type= "reset"]');
    const spinner       = document.querySelector('#spinner');

    //ASIGNA EVENTOS
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    formulario.addEventListener('submit',enviarEmail);

    btnReset.addEventListener('click',function (e) {    
        e.preventDefault();
        reserFormulario();
        
    });

    function enviarEmail(e){    
        e.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');    
            reserFormulario();

            //Crear una alerta

            const alertExito = document.createElement('P');
            alertExito,classList.add('bg-green-500','text-white','p-2','text-center','rounded-lg','mt-10',
            'font-bold','text-sm','uppercase');
            alertExito.textContent='Mensaje Enviado Correctamente';
            
            formulario.appendChild(alertExito);

            setTimeout(() =>{
                alertExito.remove(alertExito);
            },300);

        },3000);
    }
    
    function validar(e){
        
        if(e.target.value.trim() === '') {   
            mostrarAlerta(`El campo ${e.target.id} email es obligatorio`, e.target.parentElement);
            email [e.target.name] =   '';
            comprobarEmail();
            return;
            console.log("Puebas");
            
        }
        if(e.target.id ==='email'&&  !validarEmail(e.target.value)){
            mostrarAlerta('El email no es valido' , e.target.parentElement);
            email [e.target.name] =   '';
            comprobarEmail();
            return;

        }   
        
        limpiarAlerta(e.target.parentElement);

        //Asignar los valores
        email [e.target.name]= e.target.value.trim().toLowerCase();
        
        //Comprobar el objeto email
        comprobarEmail();

    }

    function mostrarAlerta(mensaje, referencia ){

        limpiarAlerta(referencia);
    
        //Generar alert
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600','text-white','p-2','text-center');

        // Inyectar el error al formulario

        referencia.appendChild(error);

    }

    function limpiarAlerta(referencia){   
        
        //Comprueba si existe una alerta

        const alerta = referencia.querySelector('.bg-red-600'); 
        if(alerta){ 
            alerta.remove();
        }
    }

    function validarEmail(email){   
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

        const resultado = regex.test(email);
        console.log(resultado);
        return resultado;
    }

    function comprobarEmail() { 
        
        if(Object.values(email).includes('')){  
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        }   
        btnSubmit.classList.remove('opacity-50');   
        btnSubmit.disabled = false;
    
    }
    function reserFormulario(){ 
        //Reiniciar el objecto  
        email.email     = ' ';  
        email.asunto    = ' ';
        email.mensaje   = ' ';
        
        formulario.reset();
        comprobarEmail();
    }
