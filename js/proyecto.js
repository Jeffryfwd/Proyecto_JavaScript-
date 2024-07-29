//document.getElementById('correoiniciosesion');
//Obtiene el elemento del DOM con el id correoiniciosesion y lo almacena en la variable correoiniciosesion.

//const contrainiciosesion = document.getElementById('contrainiciosesion');
//Obtiene el elemento del DOM con el id contrainiciosesion y lo almacena en la variable contrainiciosesion.

//const iniciarSesion = document.getElementById('iniciarSesion');
//Obtiene el elemento del DOM con el id iniciarSesion (el botón de inicio de sesión) y lo almacena en la variable iniciarSesion.

const correoiniciosesion = document.getElementById('correoiniciosesion');
const contrainiciosesion = document.getElementById('contrainiciosesion');
const iniciarSesion = document.getElementById('iniciarSesion');


//Añade un evento click al botón de inicio de sesión (iniciarSesion). Cuando se hace clic en el botón, se ejecuta la función definida.
iniciarSesion.addEventListener('click', function () {
  
   //Captura de valores ingresados por el usuario
   //Captura el valor ingresado en el campo de correo electrónico (correoiniciosesion) y lo almacena en la variable correoIngresado. El método trim() elimina los espacios en blanco al principio y al final del valor ingresado.
    let correoIngresado = correoiniciosesion.value.trim();
    let contraIngresada = contrainiciosesion.value.trim();

    // Obtener la lista de usuarios de localStorage
    //Obtiene la lista de usuarios almacenados en localStorage bajo la clave usuarios y la convierte de una cadena JSON a un objeto JavaScript utilizando JSON.parse(). Si no hay usuarios almacenados 
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificar si las credenciales ingresadas coinciden con algún usuario
   //Utiliza el método find() para buscar un usuario en la lista de usuarios que tenga un correo que coincida con correoIngresado y una contraseña que coincida con contraIngresada. Si encuentra un usuario que cumple estas condiciones, lo almacena en la variable 
    let usuarioEncontrado = usuarios.find(usuario => 
        usuario.correo === correoIngresado && usuario.contraseña === contraIngresada
    );

    if (usuarioEncontrado) {
        console.log('Inicio de sesión exitoso');
        alert('Correo y contraseña correctos');
        
    } else {
        console.log('Correo o contraseña incorrectos');
        alert('Correo o contraseña incorrectos');
        window.location.href = 'administracion.html';
    }
});
