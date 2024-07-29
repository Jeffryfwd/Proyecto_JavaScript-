    // Obtener valores del formulario
    //Estas líneas recuperan los valores introducidos por el usuario en los campos del formulario utilizando los id de los elementos de entrada. El método .value se usa para obtener el valor actual de cada campo de entrada.
    const nombre = document.getElementById('nombre');
    const apellidos = document.getElementById('apellidos');
    const correo = document.getElementById('correo');
    const telefono = document.getElementById('telefono');
    const contraseña = document.getElementById('contraseña');
    const confirmecontraseña = document.getElementById('confirmContraseña');
    const Registrar = document.getElementById('Registrar');  

    Registrar.addEventListener('click', function () {
        let nombreIngresado = nombre.value.trim();
        let apellidoIngresado = apellidos.value.trim();
        let correoIngresado = correo.value.trim();
        let telefonoIngresado = telefono.value.trim();
        let contraseñaIngresada = contraseña.value.trim();
        let confirmeContraseñaIngresada = confirmecontraseña.value.trim();

        // Verificar si las contraseñas coinciden
        if (contraseñaIngresada !== confirmeContraseñaIngresada) {
            alert('Las contraseñas no coinciden.');
            return;
        }else{
            let nuevoUsuario = {
                nombre: nombreIngresado,
                apellidos: apellidoIngresado,
                correo: correoIngresado,
                telefono: telefonoIngresado,
                contraseña: contraseñaIngresada
            };
    
            // Obtener la lista de usuarios de localStorage
            let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
            // Añadir el nuevo usuario a la lista
            usuarios.push(nuevoUsuario);
    
            // Guardar la lista actualizada de usuarios en localStorage
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
            alert('Registro exitoso.');
    
            // Redirigir a otra página después del registro exitoso
            
        }

        window.location= 'index.html'
    });
    




