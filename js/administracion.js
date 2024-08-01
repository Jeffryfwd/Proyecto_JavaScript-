
// Obtengo las referencias de los elementos del HTML
const tarea = document.getElementById('tarea');
const agregarTarea = document.getElementById('agregarTarea');
const tarealista = document.getElementById('tarealista');
const selec = document.getElementById('selec');


// Añadi un evento que se activa al hacer clic en el botón 'agregarTarea'
agregarTarea.addEventListener('click', function () {
    // Capturo los valores introducidos por el usuario
    let tareaS = tarea.value;
    let selecS = selec.value;

    // aqui verifico si el campo de la tarea está vacío
    if (tareaS === '') {
        alert('Los espacios no deben estar vacíos');
        return; // Termina la función si el campo está vacío
    }

    //Recorro cada elemento de la lista 
    for (let i = 0; i < listarea.length; i++) {
            //comparo la tarea actual en la lista con la nueva tarea
        if (listarea[i].datotarea === tareaS) {
            //aqui me da una alerta si hay una tarea ya existente
            alert('Esa tarea ya existe. Crea otra');
            return; // Termina la función si la tarea ya existe
        }
    }
    
       
    

    // Crea elementos HTML para la nueva tarea
    let aTarea = document.createElement('p');
    let Aselec = document.createElement('p');
    let btnEliminar = document.createElement('button');
    let btnEditar = document.createElement('button');

    // Establece el contenido de los elementos
    aTarea.innerHTML = tareaS;
    Aselec.innerHTML = selecS;
    btnEliminar.innerHTML = 'Eliminar';
    btnEditar.innerHTML = 'Editar';

    // Añade los elementos a la lista de tareas en el HTML
    tarealista.appendChild(aTarea);
    tarealista.appendChild(Aselec);
    tarealista.appendChild(btnEliminar);
    tarealista.appendChild(btnEditar);

    // Crea un objeto con la tarea y su prioridad
    let objetoTarea = {
        datotarea: tareaS,
        datoprio: selecS
    };

    // Añade el objeto a la lista y guarda la lista en el almacenamiento local
    listarea.push(objetoTarea);
    localStorage.setItem('tarea', JSON.stringify(listarea));
    alert('Dato almacenado');
    
    // Añade evento para el botón 'Eliminar'
    btnEliminar.addEventListener('click', function () {
        tarealista.removeChild(aTarea);
        tarealista.removeChild(Aselec);
        tarealista.removeChild(btnEliminar);
        tarealista.removeChild(btnEditar);
        // Elimina la tarea del almacenamiento local
        localStorage.removeItem('tarea');
    });

    // Añade evento para el botón 'Editar'
    btnEditar.addEventListener('click', function () {
        let nuevatarea = prompt('Editar tarea', aTarea.innerHTML);
        if (nuevatarea !== null && nuevatarea !== "") {
            aTarea.textContent = nuevatarea; // Actualiza el texto de la tarea
            objetoTarea.datotarea = nuevatarea; // Actualiza el objeto con la nueva tarea
            localStorage.setItem('tarea', JSON.stringify(listarea)); // Guarda la lista actualizada
        }
    });
});


// Intenta obtener y convertir la lista de tareas guardada en el almacenamiento local.
// Si no hay tareas guardadas, usa una lista vacía en su lugar.
let listarea = JSON.parse(localStorage.getItem('tarea')) || [];








//{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

const evento = document.getElementById('evento'); // Campo de texto para el nombre del evento
const agregarEvento = document.getElementById('agregarEvento'); // Botón para agregar el evento
const eventolista = document.getElementById('eventolista'); // Contenedor para la lista de eventos
const fecha = document.getElementById('fecha'); // Campo de texto para la fecha del evento

agregarEvento.addEventListener('click', function () {
    let eventoS = evento.value; // Obtener el valor del evento ingresado
    let fechaS = fecha.value; // Obtener el valor de la fecha ingresada

    //aqui verifico si el usuario ingreso eventos vacios y si lo hizo le da un alerta
    if (eventoS === '') {
        alert('Los espacios no deben estar vacios ')
    }

    //aqui recorro cada elemento desde la posision 0 de la lista uno x uno 
    for (let index = 0; index < listaEvento.length; index++) {
        //aqui comparo si en la lista hay un evento igual cuando el usuario intenta agregar otro evento y si lo hace le manda una alerta que el evento existe 
        if (listaEvento[index].datoevento===eventoS) {
            alert('Ese Evento ya existe crea otro')
            return;   
            
        }}
    
       
        
    
        //aqui creo elementos html para el  nuevo evento 
    let aevento = document.createElement('p');
    let eventoFecha = document.createElement('p');
    let btEliminar = document.createElement('button');
    let btEditar = document.createElement('button');

    //aqui le inserto el evento ingresado por el usuario al elemento aevento, junto con la feccha, con un boton eliminar y editar
    aevento.innerHTML = eventoS;
    eventoFecha.innerHTML = fechaS;
    btEliminar.innerHTML = 'Eliminar';
    btEditar.innerHTML = 'Editar';
 
    //Aqui vamos  agregar al elemento 'aevent' en el contenedor eventolista para que se muestre en la pagina
     //junto con su fecha, boton eliminar y editar
    eventolista.appendChild(aevento);
    eventolista.appendChild(eventoFecha);
    eventolista.appendChild(btEliminar);
    eventolista.appendChild(btEditar);

     // Crea un objeto con la tarea y su fecha
    let eventoObjeto = {
        datoevento: eventoS,
        eventoFech: fechaS
    };

    listaEvento.push(eventoObjeto); // Agregar el nuevo evento a la lista

    localStorage.setItem('evento', JSON.stringify(listaEvento)); // Guardar la lista en el localStorage
    alert('Evento almacenado');

    // Funcionalidad del botón Eliminar
    btEliminar.addEventListener('click', function () {
        eventolista.removeChild(aevento);
        eventolista.removeChild(eventoFecha);
        eventolista.removeChild(btEliminar);
        eventolista.removeChild(btEditar);
        function eliminarevento() {
            localStorage.removeItem('evento')
            
        }
        eliminarevento()
       
    });

    // aqui le agregamos un evento al botón Editar
    btEditar.addEventListener('click', function () {
        //aqui le solicitamos al usuario que le cambie el nombre al elemento aevento con el prompt 
        // hacemos la variable con el nombre nuevoevento que va obtener lo dek elemento
        let eventonuevo = prompt('Editar evento', aevento.innerHTML);
        //igualmente con la fecha
        let fechaNueva = prompt('Editar fecha', eventoFecha.innerHTML);
        //aqui verificamos que eventonuevo no sea igual a nullo y evento no sea igual a espacio vacio y fecha igual
        if (eventonuevo !== null && eventonuevo !== "" && fechaNueva !== null && fechaNueva !== "") {
            //aqui lo que tiene el elemento aevento va a ser igual al evento nuevo
            aevento.textContent=eventonuevo
            //
            eventoFecha.innerHTML=fechaNueva 
            aevento.innerHTML=eventonuevo
            eventoObjeto.datoevento = eventonuevo;
            localStorage.setItem('evento', JSON.stringify(listaEvento));
         
        }
    });
});


// Inicializar listaEvento desde el localStorage o como un array vacío
let listaEvento = JSON.parse(localStorage.getItem('evento')) || [];
