        const tarea = document.getElementById('tarea')
        const agregarTarea=document.getElementById('agregarTarea')
        const tarealista=document.getElementById('tarealista')
        const selec=document.getElementById('selec')
        
       
        let listarea =[]
        
        agregarTarea.addEventListener('click',function () {
        
        let tareaS= tarea.value
        let selecS= selec.value
        let aTarea = document.createElement('p')
        let Aselec=document.createElement('p')
            
        let btnEliminar= document.createElement('button')
        let btnEditar = document.createElement('button')
    
        aTarea.innerHTML=tareaS
        aTarea.id='aTarea'
        btnEliminar.innerHTML='Eliminar'
        btnEliminar.id='bntEliminar'
        btnEditar.innerHTML='Editar'
        btnEditar.id='btnEditar'
        Aselec.innerHTML= selec.value
        Aselec.id= 'Aselec'

        
        tarealista.appendChild(aTarea)
        tarealista.appendChild(Aselec)
        tarealista.appendChild(btnEliminar)
        tarealista.appendChild(btnEditar)
          
                let objetotarea={
                datotarea: tarea.value,
                datoprio: selec.value
            }
        //Este código agrega tareaS al final de la lista listarea.
        listarea.push(objetotarea)

        

         localStorage.setItem('tarea', JSON.stringify (objetotarea))
        alert('dato almacenado')


        btnEliminar.addEventListener('click',function () {
            tarealista.removeChild(aTarea)
            tarealista.removeChild(btnEliminar)
            tarealista.removeChild(btnEditar)
            tarealista.removeChild(Aselec)
            

        })
        btnEditar.addEventListener('click', function () {
            let nuevatarea = prompt('editar tarea', aTarea)
            if (nuevatarea !== null && nuevatarea !== "") {
                aTarea.textContent= nuevatarea 
            } 
            
        })
        })
       
        //------------------------------------------------------------------------------------------------------------------------------------
        const evento = document.getElementById('evento')
        const agregarEvento = document.getElementById('agregarEvento')
        const eventolista = document.getElementById('eventolista')

       
       
        agregarEvento.addEventListener('click', function () {
            let eventoS= evento.value
            let aevento=document.createElement('p')
            let btEliminar = document.createElement('button')
            let btEditar = document.createElement('button')

            aevento.innerHTML=eventoS
            aevento.id='aevento'
            btEliminar.innerHTML='Eliminar'
            btEliminar.id='Eliminar'
            btEditar.innerHTML='Editar'
            btEditar.id='Editar'
            
            eventolista.appendChild(aevento)
            eventolista.appendChild(btEliminar)
            eventolista.appendChild(btEditar)

           btEliminar.addEventListener('click', function () {
            eventolista.removeChild(btEliminar)
            eventolista.removeChild(aevento)
            eventolista.removeChild(btEditar)

           })
           btEditar.addEventListener('click', function () {
            let eventonuevo = prompt('editar evento', aevento)
            if (eventonuevo!== null && eventonuevo !== '') {
                aevento.textContent=eventonuevo
                
            }
           }) 
        })
//----------------------------------------------------------
const task= document.getElementById('task')

task.addEventListener('click', function () {

    let listarea = JSON.parse(localStorage.getItem('listarea'))
console.log(localStorage);
})
    