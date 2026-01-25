const URL_BASE = "https://69727dd032c6bacb12c715cc.mockapi.io/contactos";
let listaContactos = [];
let contactoEnEdicion = null;

const formularioHTML = document.getElementById ("formulario-contacto");
const cuerpoTablaHTML = document.getElementById("cuerpo-tabla");

const obtenerContactos = async () => {
try {
    const respuesta= await axios.get (URL_BASE);
    listaContactos = respuesta.data; 
    pintarContactos ();;
} catch (error) {
    Swal.fire ( "Error", "No se pudieron cargar los contactos", "error");
}
}
obtenerContactos ();


formularioHTML.addEventListener ("submit", async function (evento) {
    evento.preventDefault ();
    
    const nombre = document.getElementById ("input-nombre").value;
    const email = document.getElementById ("input-email").value;
    const telefono = document.getElementById ("input-telefono").value;
    const nacimiento = document.getElementById ("input-nacimiento").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    return Swal.fire("Error", "Por favor, ingresá un email válido (ej: nombre@mail.com)", "error");
}

   try {
    if (contactoEnEdicion !== null) {
        const contactoEditado ={nombre, email, telefono, nacimiento};
        await axios.put(`${URL_BASE}/${contactoEnEdicion.id}`, contactoEditado);
        Swal.fire ("¡Éxito!", "Contacto editado correctamente", "success");
        
        contactoEnEdicion = null;
        document.querySelector ("#formulario-contacto button").innerText = "Guardar Contacto";
    } else {
    const nuevoContacto = { nombre, email, telefono, nacimiento};
    await axios.post (URL_BASE, nuevoContacto);
        Swal.fire ("¡Éxito!", "Contacto agregado correctamente", "success");     
    }
    obtenerContactos ();  
    formularioHTML.reset ();

 } catch (error) {
    Swal.fire ( "Error", "No se pudo guardar el contacto", "error");
   }
   
});
function editarContacto (idRecibido){
    const contactoEncontrado = listaContactos.find (contacto => contacto.id == idRecibido);
if (contactoEncontrado) {
    contactoEnEdicion = contactoEncontrado;
    document.getElementById ("input-nombre").value = contactoEncontrado.nombre;
    document.getElementById ("input-email").value = contactoEncontrado.email;
    document.getElementById ("input-telefono").value = contactoEncontrado.telefono;
    document.getElementById ("input-nacimiento").value = contactoEncontrado.nacimiento;         
    document.querySelector ("#formulario-contacto button").innerText = "Guardar Cambios";
}
}

function pintarContactos () {
    cuerpoTablaHTML.innerHTML = "";     

listaContactos.forEach ((contacto) => {
    cuerpoTablaHTML.innerHTML += `
    <tr>
    <td>${contacto.nombre}</td>
    <td> ${contacto.email}</td>
    <td> ${contacto.telefono}</td>
    <td> ${contacto.nacimiento}</td>
    <td class="d-flex gap-2 justify-content-center">
    <button class= "btn btn-danger bn-sm" onclick="eliminarContacto(${contacto.id})"><i class = "bi bi-trash-fill"></i>Eliminar</button>
    
    <button class= "btn btn-warning bn-sm" onclick="editarContacto(${contacto.id})"><i class= "bi bi-pencil-square"></i>Editar</button>
    
    </td>
    
    </tr>`
})

}
async function eliminarContacto (idRecibido) {
    const resultado = await Swal.fire ({
        title: '¿Estás seguro, mi rey?',
        text: "¡No vas a poder recuperar este contacto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, borrar ',
        cancelButtonText: 'Cancelar'
    
    });
        if (resultado.isConfirmed){
          try {
           
            await axios.delete(`${URL_BASE}/${idRecibido}`);
            
          
            Swal.fire("¡Eliminado!");
            obtenerContactos();
            
        } catch (error) {
         
            Swal.fire("Error", "No se pudo eliminar el contacto", "error");
        }
    }}


const btnColor = document.getElementById ("btn-color");
const iconoModo = document.getElementById ("icono-modo");
btnColor.addEventListener ("click", ()=>{
    const cuerpo = document.body;
    cuerpo.classList.contains ("bg-light") 
        ? (
            cuerpo.classList.replace("bg-light", "bg-dark"),
            cuerpo.classList.add("text-white"),
            iconoModo.className = "bi bi-sun-fill", // Cambia a sol
            btnColor.innerHTML = `<i class="bi bi-sun-fill"></i> Modo Claro`
          ) 
        : (
            cuerpo.classList.replace("bg-dark", "bg-light"),
            cuerpo.classList.remove("text-white"),
            iconoModo.className = "bi bi-moon-fill", // Cambia a luna
            btnColor.innerHTML = `<i class="bi bi-moon-fill"></i> Modo Oscuro`
          );
});









