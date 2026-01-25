let contactos = [];
let listEdit = null;

const serverURL = "https://696bd723624d7ddccaa22b7a.mockapi.io";
const filterInputHTML = document.querySelector("#filterInput");
const contactListHTML = document.querySelector(".info-cell");
const buttonSubmit = document.getElementById("buttonSubmit");
const addNewFormHTML = document.getElementById("form-contact");
const addNewFormContainer = document.querySelector(".add-contact");
const addNewButton = document.getElementById("addnew-btn");
const buttonReset = document.getElementById("buttonReset");
const avatarInput = document.querySelector(".avatar-input");
const closeButton = document.getElementById("close-btn");
const formTitle = document.querySelector(".formTitle");

obtenerUsuarios();

async function obtenerUsuarios() {
  try {
    const respuesta = await axios.get(`${serverURL}/contacts`);
    contactos = respuesta.data;
    renderizarContacts();
  } catch (error) {
    console.error(error);
    showSwalMsg("No se pudo cargar la lista de usuarios", "error");
  }
}

contactListHTML.addEventListener("click", function (event) {
  const boton = event.target.closest(".edit-btn");

  if (boton) {
    const id = boton.getAttribute("data-id");
    editarContact(id);
  }
});

function renderizarContacts(contactosAMostrar = contactos) {
  contactListHTML.innerHTML = "";
  for (let contact of contactosAMostrar) {
    const formatedemail = formatMail(contact.email);
    const photo = contact.avatar
      ? contact.avatar
      : "/assets/images/profile.png";
    contactListHTML.innerHTML += `<tr>
                    <td class="img-cell"><img src="${photo}" alt="Profile Photo"></td>
                    <td>${contact.lastName}, ${contact.name}</td>
                    <td>${formatedemail}</td>
                    <td>${contact.phone}</td>
                    <td>${formatFecha(contact.birthday)}</td>
                    <td>
                      <button type="button" class="btn btn-primary btn-sm edit-btn" data-id="${contact.id}">
                        <i class="fa-solid fa-pen"></i>
                      </button>
                      <button type="button" class="btn btn-danger btn-sm" onclick="deleteContact(${contact.id})">
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
        `;
  }
}

addNewFormHTML.addEventListener("submit", async function (event) {
  event.preventDefault();
  const el = event.target.elements;

  if (listEdit === null) {
    try {
      const nuevoContact = {
        id: Date.now(),
        name: el.name.value,
        lastName: el.lastName.value,
        email: el.email.value,
        phone: el.phone.value,
        birthday: el.birthday.value,
        avatar: el.avatar.value,
      };

      await axios.post(`${serverURL}/contacts`, nuevoContact);

      showSwalMsg("Nuevo contacto agregado", "success");
    } catch (error) {
      showSwalMsg("Error", "No se pudo agregar la tarea al servidor", "error");
    }
  } else {

    try {
      const updatedContact = {
        name: el.name.value,
        lastName: el.lastName.value,
        email: el.email.value,
        phone: el.phone.value,
        birthday: el.birthday.value,
        
      };

      await axios.put(`${serverURL}/contacts/${listEdit.id}`, updatedContact);

      listEdit.name = el.name.value;
      listEdit.lastName = el.lastName.value;
      listEdit.eMail = el.email.value;
      listEdit.phone = el.phone.value;
      listEdit.birthday = el.birthday.value;
      

      buttonSubmit.classList.remove("btn-success");
      buttonSubmit.classList.add("btn-primary");
      buttonSubmit.textContent = "Agregar";

      showSwalMsg("Cambios guardados", "success");
    } catch (error) {
      console.error(error);
      showSwalMsg("Error", "No se pudo editar el contacto", "error");
    }
  }
    
  listEdit = null;

  buttonReset.classList.add("d-none");
  avatarInput.classList.remove("d-none");
  addNewFormHTML.reset();
  formTitle.textContent = "Nuevo contacto";
  await obtenerUsuarios();
});

addNewFormHTML.addEventListener("reset", function (event) {
  if (buttonSubmit.classList.contains("btn-success")) {
    buttonSubmit.classList.remove("btn-success");
    buttonSubmit.classList.add("btn-primary");
    buttonSubmit.textContent = "Agregar";
  }

  listEdit = null;
  buttonReset.classList.add("d-none");

  if (!addNewFormContainer.classList.contains("d-none")) {
    addNewFormContainer.classList.add("d-none");
  }
  formTitle.textContent = "Nuevo contacto";
  addNewFormHTML.reset();
  avatarInput.classList.remove("d-none");
});

addNewButton.addEventListener("click", function (event) {
  if (addNewFormContainer.classList.contains("d-none")) {
    addNewFormContainer.classList.remove("d-none");
  }
});

closeButton.addEventListener("click", function (event) {
  if (!addNewFormContainer.classList.contains("d-none")) {
    addNewFormContainer.classList.add("d-none");
  }

  listEdit = null;
  formTitle.textContent = "Nuevo contacto";
  addNewFormHTML.reset();
});

filterInputHTML.addEventListener("keyup", function (event) {
  const text = event.target.value.toLowerCase();

  const contactoFiltrado = contactos.filter((contacto) => {
    const name = contacto.name.toLowerCase();
    const lastName = contacto.lastName.toLowerCase();

    if (name.includes(text) || lastName.includes(text)) {
      return true;
    }
    return false;
  });
  renderizarContacts(contactoFiltrado);
});

function showSwalMsg(titulo, iconito = "success") {
  Swal.fire({
    position: "top-end",
    icon: iconito,
    title: titulo,
    showConfirmButton: false,
    timer: 1500,
  });
}

function editarContact(id) {
  if (addNewFormContainer.classList.contains("d-none")) {
    addNewFormContainer.classList.remove("d-none");
  }

  formTitle.textContent = "Modificar contacto";

  const idString = String(id);
  
  const contact = contactos.find((contacto) => {
    return String(contacto.id) === idString;
  });

  if (!contact) {
    console.error("Contacto no encontrado.");
    showSwalMsg("Contacto no encontrado", "error");
    return;
  }

  listEdit = contact;

  addNewFormHTML.elements.name.value = contact.name;
  addNewFormHTML.elements.lastName.value = contact.lastName;
  addNewFormHTML.elements.email.value = contact.email;
  addNewFormHTML.elements.phone.value = contact.phone;
  addNewFormHTML.elements.birthday.value = formatFecha(contact.birthday);
  
  avatarInput.classList.add("d-none");
  buttonSubmit.classList.remove("btn-primary");
  buttonSubmit.classList.add("btn-success");
  buttonSubmit.textContent = "Editar";

  const buttonReset = document.getElementById("buttonReset");
  buttonReset.classList.remove("d-none");
}

function deleteContact(id) {
  try {
  Swal.fire({
    title: "¿Estás seguro de que deseas eliminar este contacto?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí",
  }).then( async (result) => {
    if (result.isConfirmed) {

      try {
        await axios.delete(`${serverURL}/contacts/${id}`)
        await obtenerUsuarios();

      Swal.fire({
        title: "Contacto borrado!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    }
     catch (error) {
      showSwalMsg("Error", "No se pudo eliminar el contacto", "error");
    }
  }});
  } catch (error) {
    showSwalMsg("Error", "No se pudo eliminar el contacto", "error");
  }
  if (!addNewFormContainer.classList.contains("d-none")) {
    addNewFormContainer.classList.add("d-none");
    addNewFormHTML.reset();
  }
}

function formatMail(mail) {
  return mail.toLowerCase();
}

function formatFecha(fecha) {
  // Convierte formato ISO "2003-07-11T01:48:27.929Z" a DD-MM-YYYY
  if (!fecha) return "";
  
  // Extrae solo la parte de la fecha (primeros 10 caracteres o antes de la T)
  const fechaSolo = fecha.split("T")[0];
  return fechaSolo;
  // const [year, month, day] = fechaSolo.split("-");
  // return `${day}-${month}-${year}`;
}
