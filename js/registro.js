   
     // Obtener valores del formulario
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
            if (nombreIngresado === '' && apellidoIngresado === '' && correoIngresado === '' && telefonoIngresado === '' && contraseñaIngresada === '' && confirmeContraseñaIngresada === '') {
                alert('Complete todos los espacios');
                return;
            }

            
            
            // Añadir el nuevo usuario a la lista
            usuarios.push(nuevoUsuario);
           
            // Obtener la lista de usuarios de localStorage
            let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    
            // Guardar la lista actualizada de usuarios en localStorage
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
            alert('Registro exitoso.');
    
            // Redirigir a otra página después del registro exitoso
            
        }

        window.location= 'index.html'
    });
    




