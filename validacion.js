var flag = false;
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    /* VALIDA EL CAMPO NOMBRE */
    var usuario = document.getElementById('nombre').value;
    if(usuario.length == 0) {
        document.getElementById('nombreError').innerHTML="Por favor ingrese un nombre";
        return;
    }else{
        document.getElementById('nombreError').innerHTML="";
    }
    /* VALIDA EL CAMPO EMAIL */
    var email = document.getElementById('email').value;
    if (email.length == 0) {
        document.getElementById('emailError').innerHTML="Por favor ingrese un email";
        return;
    }else{
        document.getElementById('emailError').innerHTML="";
        for(var i=1; i<= email.length; i++){
            console.log("buscando@");
            if(email[i] == "@"){
                flag=true;
            }
        }
        if(!flag){
            document.getElementById('emailError').innerHTML="El email debe tener el siguiente formato: ejemplo@dominio.com";
            return;
        }else{
            document.getElementById('emailError').innerHTML="";
            flag == false;
        }
    }
    /* VALIDA EL CAMPO ASUNTO */    
    var asunto = document.getElementById('asunto').value;
    if (asunto.length == 0) {
        document.getElementById('asuntoError').innerHTML="Por favor ingrese un asunto";
        return;
    }else{
        document.getElementById('asuntoError').innerHTML="";
    }
    /* VALIDA EL CAMPO ASUNTO */
    var mensaje = document.getElementById('mensaje').value;
    if (mensaje.length == 0) {
        document.getElementById('mensajeError').innerHTML="Por favor ingrese un texto";
        return;
    }else{
        document.getElementById('mensajeError').innerHTML="";
    }
    swal("Su mensaje fue enviado","Me contactare con usted en la brevedad. Gracias", "error");
    this.submit();
    
  }