const serverURL="https://696d9e3bd7bacd2dd7141dd5.mockapi.io/contactos/contacto";


let usuarios =[
//     {
//         id:1,
//         nombre:"Nick Esteban Cohecha Arango",
//         email:"nickesteban100@gmail.com",
//         telefono:3124588800,
//         fechaNacimiento:"1998-08-09"
//     },{
//         id:2,
//         nombre:"Liliana Arango Orduz",
//         email:"lilianaarangoorduz@gmail.com",
//         telefono:3107608784,
//         fechaNacimiento:"1976-05-19"
//     },{
//         id:3,
//         nombre:"Camilo Humberto Cohecha Torres",
//         email:"camilocohechagmail.com",
//         telefono:3133834939,
//         fechaNacimiento:"1969-10-16"
//     }
];

obtenerContactos();

async function obtenerContactos() {
  try {
    const respuesta = await axios.get(serverURL);
    usuarios=respuesta.data;
  } catch (error) {
    console.error("el error es",error);
  }
  renderizarUsuarios();
}


const agregarElementos=document.getElementById("agregarElementos");
const formulario = document.getElementById("formulario");

let esEditar=false;
let numeroId=0;


function renderizarUsuarios(){
    agregarElementos.textContent="";
    for (let usuario of usuarios){
        agregarElementos.innerHTML +=`                    
                    <tr>
                        <td><label>${usuario.nombre}</label></td>
                        <td><label>${usuario.email}</label></td>
                        <td><label>${usuario.telefono}</label></td>
                        <td><label>${usuario.fechaNacimiento}</label></td>
                        <td>
                            <div class="icono">
                                <button class="icono-editar" onclick="editar(${usuario.id})">
                                    <span class="material-symbols-outlined">
                                        edit
                                    </span>
                                    Editar
                                </button>
                                <button class="icono-eliminar" onclick="eliminar(${usuario.id})">
                                    <span class="material-symbols-outlined">
                                        delete
                                    </span>
                                    Eliminar
                                </button>
                            </div>
                        </td>
                    </tr>
        `;
    }
};

async function agregarContacto(nuevoContacto){
    try{
        await axios.post(serverURL,nuevoContacto);
        Swal.fire({
            title: "Usuario creado con exito",
            icon: "success",
            draggable: true
        });
        obtenerContactos();
    }catch (error){
        console.error("Error al agregar usuario: ",error);
    }
};
async function editarContacto(numeroId,contactoEditado){
    try{
        await axios.put(`${serverURL}/${numeroId}`,contactoEditado);
        Swal.fire({
            title: "Usuario editado con exito",
            icon: "success",
            draggable: true
        });
        obtenerContactos();
    }catch(error){
        console.error("Error al editar usuario: ",error);
    };
}

formulario.addEventListener("submit", function (event) {
    event.preventDefault(); 
    const elementosFormulario = event.target.elements;

    if(esEditar==false){
        const nuevoUsuario ={
        nombre:elementosFormulario.nombre.value,
        email:elementosFormulario.email.value,
        telefono:elementosFormulario.telefono.value,
        fechaNacimiento:elementosFormulario.fechaNacimiento.value,
        };
        event.target.reset();
        agregarContacto(nuevoUsuario);
       
    };
    if(esEditar==true){
        esEditar=false;
        const usuarioEditado={
            nombre:elementosFormulario.nombre.value,
            email:elementosFormulario.email.value,
            telefono:elementosFormulario.telefono.value,
            fechaNacimiento:elementosFormulario.fechaNacimiento.value,
        };
        editarContacto(numeroId,usuarioEditado);
        event.target.reset();
        numeroId=0;
        document.getElementById("botonSubmit").textContent="Agregar Contacto";
    };
    
    
});
async function elimiarContacto(numeroId){
    try{
        await axios.delete(`${serverURL}/${numeroId}`);
        Swal.fire({
            title: "Usuario eliminado con exito",
            icon: "success",
            draggable: true
        });
        obtenerContactos();
    }catch(error){console.error("Error al eliminar Usuario ",error)};
}

function eliminar(ids){
    const confirmar = confirm("¿Estás seguro de que deseas eliminar esta tarea?");
    if(confirmar){
        // const indice = usuarios.findIndex((usuario) => {
        // if (usuario.id === ids) {
        //     return true;
        // }

        // return false;
        // // });
        // usuarios.splice(indice, 1);
        elimiarContacto(ids);
    }
};

function editar(ids){
    for (const usuario of usuarios){
        if(usuario.id==ids){
            document.getElementsByName("nombre")[0].value=usuario.nombre;
            document.getElementsByName("email")[0].value=usuario.email;
            document.getElementsByName("telefono")[0].value=usuario.telefono;
            document.getElementsByName("fechaNacimiento")[0].value=usuario.fechaNacimiento;
            document.getElementById("botonSubmit").textContent="Editar Contacto";

            esEditar=true;
            numeroId=ids;
            break;
        };
    };
};