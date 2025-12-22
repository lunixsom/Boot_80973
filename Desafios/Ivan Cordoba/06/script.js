
let contactos = [];
let contactoEditando = null;

const botonAgregar = document.getElementById('btnAgregar');

botonAgregar.addEventListener('click', function(){
    const datos = obtenerDatosFormulario();

    if(!validarDatos(datos)){
        alert('Completa todos los campos');
        return;
    }

    if(contactoEditando){
        contactoEditando.nombre = datos.nombre;
        contactoEditando.email = datos.email;
        contactoEditando.telefono = datos.telefono;
        contactoEditando.fechaNacimiento = datos.fechaNacimiento;

        
        contactoEditando = null;
        botonAgregar.textContent = 'Agregar';
        botonAgregar.classList.remove('btn-success');
        botonAgregar.classList.add('btn-primary')
        showSwalToast("Contacto Editado!", "El contacto se editó correctamente", "info");

         
    }else{
        const contacto = crearContacto(datos);
        guardarContacto(contacto);

        showSwalToast("Contacto Agregado!", "El contacto se agregó correctamente");
        
    }
    
   

    mostrarContactos();
});

function obtenerDatosFormulario (){
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

    return {
        nombre,
        email,
        telefono,
        fechaNacimiento
    };
}

function validarDatos(datos){
    if(datos.nombre === "" || datos.email === "" || datos.telefono === "" || datos.fechaNacimiento === ""){
        return false;
        }
    return true;
}

function crearContacto (datos){
    return {
        id: Date.now(),
        nombre: datos.nombre,
        email: datos.email,
        telefono: datos.telefono,
        fechaNacimiento: datos.fechaNacimiento,
    };
}

function guardarContacto(contacto){
    contactos.push(contacto);

    
}

function mostrarContactos (){
    const tbody = document.getElementById('tablaContactos');
    tbody.innerHTML = "";

    contactos.forEach( function (contacto) {
        const fila = `
        <tr>
        <td>${contacto.nombre}</td>
        <td>${contacto.email}</td>
        <td>${contacto.telefono}</td>
        <td>${contacto.fechaNacimiento}</td>
        <td>
        <button class="btn btn-sm btn-primary" onclick = "editarContacto(${contacto.id})"><i class="fa-solid fa-pen"></i></button>
       
        <button class="btn btn-sm btn-danger" onclick = "eliminarContacto(${contacto.id})"><i class="fa-solid fa-trash"></i></button>
        </td>
        `;

        tbody.innerHTML += fila;
    })
}

function limpiarFormulario(){
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('fechaNacimiento').value = '';
}

function eliminarContacto (id){
    
    const confirmar = confirm("¿Estás seguro de que deseas eliminar esta tarea?");

    if(confirmar){
        contactos = contactos.filter( function(contacto){
            return contacto.id !== id;
        });

        showSwalToast("Contacto Eliminado", "El contacto se eliminó correctamente", "error");
        mostrarContactos();
    }

}

function editarContacto(id){

    if(contactoEditando !== null && contactoEditando.id === id){
        contactoEditando = null;
        limpiarFormulario();

        botonAgregar.textContent = 'Agregar'
        botonAgregar.classList.remove("btn-success");
        botonAgregar.classList.add("btn-primary");

        return;
}

    contactoEditando = contactos.find( function (contacto){
        return contacto.id === id;

         });
        document.getElementById('nombre').value = contactoEditando.nombre;
        document.getElementById('email').value = contactoEditando.email;
        document.getElementById('telefono').value = contactoEditando.telefono;
        document.getElementById('fechaNacimiento').value = contactoEditando.fechaNacimiento;
   
        botonAgregar.classList.remove("btn-primary");
        botonAgregar.classList.add("btn-success");

        botonAgregar.textContent = contactoEditando ? "Editar" : "Agregar";
}


function showSwalToast(titulo, descripcion, iconito = "success") {
  Swal.fire({
    title: titulo,
    text: descripcion,
    icon: iconito,
    position: "top-right",
    timer: 2000,
    showConfirmButton: false,
    toast: true,
    theme: "dark",
  });
}

