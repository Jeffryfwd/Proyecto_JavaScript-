
//obtengo los elementos del html
const correoiniciosesion = document.getElementById('correoiniciosesion');
const contrainiciosesion = document.getElementById('contrainiciosesion');
const iniciarSesion = document.getElementById('iniciarSesion');



iniciarSesion.addEventListener('click', function () {
  
  
    //Capturo los valores ingresados por el usuario, correoIngresado va ontener el valor de correo iniciosesion, ingresado por el usuario
    let correoIngresado = correoiniciosesion.value.trim();
    let contraIngresada = contrainiciosesion.value.trim();
     // Verificar si los campos están vacíos
     if (correoIngresado === '' && contraIngresada === '') {
        alert('Complete todos los espacios');
        return; //termina la funcion cuando haya un espacio vacio y no se agrega otro correo y contraseña igual 
    }

    // Obtenengo la lista de usuarios de localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificar si las credenciales ingresadas coinciden con algún usuario
   //Utiliza el método find() para buscar un usuario en la lista de usuarios que tenga un correo que coincida con correoIngresado y una contraseña que coincida con contraIngresada. Si encuentra un usuario que cumple estas condiciones, lo almacena en la variable 
    let usuarioEncontrado = usuarios.find(usuario => 
        usuario.correo === correoIngresado && usuario.contraseña === contraIngresada
    );
    
    if (usuarioEncontrado) {
        alert('Correo y contraseña correctos');
       window.location.href='administracion.html'
    } else {
        console.log('Correo o contraseña incorrectos');
        
        
    }
   
    
});
