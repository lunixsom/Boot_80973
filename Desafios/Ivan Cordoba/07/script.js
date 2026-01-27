
let contactos = [];
let contactoEditando = null;

const API_URL = "https://694332dd69b12460f313f684.mockapi.io/Contactos";

const botonAgregar = document.getElementById('btnAgregar');

botonAgregar.addEventListener('click', function(){
    
   const datos = obtenerDatosFormulario();
   console.log("DATOS FORM:", datos);

    if(!validarDatos(datos)){
        showSwalToast("Datos inválidos", "Revisá los campos (email incluido)", "error");;
        return;
    }

    if(contactoEditando){
        editarContactosAPI(contactoEditando.id, datos);
         
    }else{
        
        agregarContactoAPI(datos);
    }
    
   

});

function obtenerDatosFormulario (){
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const fechaDeNacimiento = document.getElementById('fechaDeNacimiento').value;

    return {
        nombre,
        email,
        telefono,
        fechaDeNacimiento
    };
}

function validarDatos(datos){
    if(datos.nombre === "" || datos.email === "" || datos.telefono === "" || datos.fechaDeNacimiento === ""){
        return false;
        }
    
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email);
    if(!emailValido) return false;

    return true;
}

function crearContacto (datos){
    return {
        // id: Date.now(),
        nombre: datos.nombre,
        email: datos.email,
        telefono: datos.telefono,
        fechaDeNacimiento: datos.fechaDeNacimiento,
    };
}

function guardarContacto(contacto){
    contactos.push(contacto);

    
}

function mostrarContactos (){
    const tbody = document.getElementById('tablaContactos');
    tbody.innerHTML = "";

    if (!Array.isArray(contactos)) return;
    
    contactos.forEach( function (contacto) {
        console.log(contacto.fechaDeNacimiento);
        const fila = `
        <tr>
        <td>${ contacto.nombre }</td>
        <td><a href="mailto:${contacto.email}">${ contacto.email }</td>
        <td>${ contacto.telefono }</td>
        <td>${ formatearFecha(contacto.fechaDeNacimiento) }</td>
        <td>
        <button class="btn btn-sm btn-primary" onclick = "editarContacto('${ contacto.id }')"><i class="fa-solid fa-pen"></i></button>
       
        <button class="btn btn-sm btn-danger" onclick = "eliminarContacto('${ contacto.id }')"><i class="fa-solid fa-trash"></i></button>
        </td>
        `;

        tbody.innerHTML += fila;
    })
}

function limpiarFormulario(){
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('fechaDeNacimiento').value = '';
}

function eliminarContacto (id){
    
    const confirmar = confirm("¿Estás seguro de que deseas eliminar éste contacto?");

    if(confirmar){
        eliminarContactoAPI(id);
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
        document.getElementById('fechaDeNacimiento').value = contactoEditando.fechaDeNacimiento;
   
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


async function cargarContactos() {
  try {
    const respuesta = await axios.get(API_URL);

    contactos = respuesta.data;

    console.log("CONTACTOS TRAIDOS:", contactos);
    mostrarContactos();

  } catch (error) {
    showSwalToast('Error', 'No se pudieron cargar los contactos', 'error');
  }
}

window.addEventListener('DOMContentLoaded', cargarContactos);

async function agregarContactoAPI(datos){
  try {
    const respuesta = await axios.post(API_URL, datos);
    console.log("RESPUESTA POST:", respuesta.data);

    showSwalToast("Contacto Agregado!", "El contacto se agregó correctamente");

    limpiarFormulario();
    await cargarContactos();
  } catch (error) {
    showSwalToast('Error', 'No se pudieron cargar los contactos', 'error');
  }

  
}

async function editarContactosAPI(id, datos) {
 try {
  await axios.put(`${API_URL}/${id}`, datos);

  showSwalToast('Contacto editado', 'Se actualizó correctamente', 'info');
  
  limpiarFormulario();

  contactoEditando = null;
  botonAgregar.textContent = 'Agregar';
  botonAgregar.classList.remove('btn-success');
  botonAgregar.classList.add('btn-primary');

  await cargarContactos();

 } catch (error) {
  showSwalToast("Error", "No se pudo editar el contacto", "error");
 }  
}

async function eliminarContactoAPI(id) {
  try {
    await axios.delete(`${API_URL}/${id}`);

    showSwalToast('Contacto Eliminado', 'Se eliminó correctamente', 'error');
    await cargarContactos();


  } catch (error) {
    showSwalToast("Error", "No se pudo eliminar el contacto", "error");
  }
  
}

function formatearFecha(fecha) {    
  if(!fecha) return "";

  // Si la fecha viene como "yyyy-mm-dd"
  if(typeof fecha === 'string' && fecha.includes('-')){
    const [yyyy, mm, dd] = fecha.split('-');
    return `${dd}-${mm}-${yyyy}`;
  }

  //Si viene la fecha como número (timestamp)
  const fechaNumero = Number(fecha);

  //Si es timestamp en segundos (10 digitos aproximadamente)
  const esSegundos = fechaNumero < 1000000000000;

  const date = new Date(esSegundos ? fechaNumero * 1000 : fechaNumero);

  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2,'0');
  const dd = String(date.getDate()).padStart(2, '0');

  return `${dd}-${mm}-${yyyy}`;
}

