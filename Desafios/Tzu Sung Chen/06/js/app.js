const contactos = [
  {
    id: 10,
    name: "Tzu Sung",
    lastName: "Chen",
    email: "chenlyro@hotmail.com",
    areacode: "11",
    phone: "34228511",
    birthday: "1993-06-01",
    profilePhoto: "/assets/images/06af5887a302fe8977529b19bcf92b18.jpg",
  },
  {
    id: 20,
    name: "David",
    lastName: "Chen",
    email: "chendavid@gmail.com",
    areacode: "351",
    phone: "6984512",
    birthday: "1995-11-03",
    profilePhoto: "/assets/images/49ed503a920b1eb6d3794bbba292cb88.jpg",
  },
  {
    id: 30,
    name: "Damian",
    lastName: "Chen",
    email: "chendamian@yahoo.com",
    areacode: "11",
    phone: "98712398",
    birthday: "2004-07-14",
    profilePhoto: "",
  },
  {
    id: 10,
    name: "Tzu Sung",
    lastName: "Chen",
    email: "chenlyro@hotmail.com",
    areacode: "11",
    phone: "34228511",
    birthday: "1993-06-01",
    profilePhoto: "/assets/images/06af5887a302fe8977529b19bcf92b18.jpg",
  },
  {
    id: 20,
    name: "David",
    lastName: "Chen",
    email: "chendavid@gmail.com",
    areacode: "351",
    phone: "6984512",
    birthday: "1995-11-03",
    profilePhoto: "/assets/images/49ed503a920b1eb6d3794bbba292cb88.jpg",
  },
  {
    id: 30,
    name: "Damian",
    lastName: "Chen",
    email: "chendamian@yahoo.com",
    areacode: "11",
    phone: "98712398",
    birthday: "2004-07-14",
    profilePhoto: "",
  },
  {
    id: 10,
    name: "Tzu Sung",
    lastName: "Chen",
    email: "chenlyro@hotmail.com",
    areacode: "11",
    phone: "34228511",
    birthday: "1993-06-01",
    profilePhoto: "/assets/images/06af5887a302fe8977529b19bcf92b18.jpg",
  },
  {
    id: 20,
    name: "David",
    lastName: "Chen",
    email: "chendavid@gmail.com",
    areacode: "351",
    phone: "6984512",
    birthday: "1995-11-03",
    profilePhoto: "/assets/images/49ed503a920b1eb6d3794bbba292cb88.jpg",
  },
  {
    id: 30,
    name: "Damian",
    lastName: "Chen",
    email: "chendamian@yahoo.com",
    areacode: "11",
    phone: "98712398",
    birthday: "2004-07-14",
    profilePhoto: "",
  },
];

let listEdit = null;

const filterInputHTML = document.querySelector("#filterInput");
const contactListHTML = document.querySelector(".info-cell");
const buttonSubmit = document.getElementById("buttonSubmit");
const addNewFormHTML = document.getElementById("form-contact");
const addNewFormContainer = document.querySelector(".add-contact");
const addNewButton = document.getElementById("addnew-btn");
const buttonReset = document.getElementById("buttonReset");
const closeButton = document.getElementById("close-btn");
const formTitle = document.querySelector(".formTitle");

renderizarContacts();

contactListHTML.addEventListener("click", function (event) {
  const boton = event.target.closest(".edit-btn");

  if (boton) {
    const id = boton.getAttribute("data-id");
    editarContact(+id);
  }
});

function renderizarContacts(contactosAMostrar = contactos) {
  contactListHTML.innerHTML = "";
  for (let contact of contactosAMostrar) {
    const photo = contact.profilePhoto
      ? contact.profilePhoto
      : "/assets/images/profile.png";
    contactListHTML.innerHTML += `<tr>
                    <td class="img-cell"><img src="${photo}" alt="Profile Photo"></td>
                    <td>${contact.lastName}, ${contact.name}</td>
                    <td>${contact.email}</td>
                    <td> +54 9 ${contact.areacode} ${contact.phone}</td>
                    <td>${contact.birthday}</td>
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

addNewFormHTML.addEventListener("submit", function (event) {
  event.preventDefault();
  const el = event.target.elements;

  if (listEdit === null) {
    const nuevoContact = {
      id: Date.now(),
      name: el.name.value,
      lastName: el.lastName.value,
      email: el.email.value,
      areacode: el.areacode.value,
      phone: el.phone.value,
      birthday: el.birthday.value,
      profilePhoto: el.profilePhoto.value,
    };

    contactos.push(nuevoContact);

    showSwalMsg("Nuevo contacto agregado", "success");
  } else {
    listEdit.name = el.name.value;
    listEdit.lastName = el.lastName.value;
    listEdit.email = el.email.value;
    listEdit.areacode = el.areacode.value;
    listEdit.phone = el.phone.value;
    listEdit.birthday = el.birthday.value;

    buttonSubmit.classList.remove("btn-success");
    buttonSubmit.classList.add("btn-primary");
    buttonSubmit.textContent = "Agregar";

    showSwalMsg("Cambios guardados", "success");
  }

  listEdit = null;

  buttonReset.classList.add("d-none");
  addNewFormHTML.reset();
  formTitle.textContent = "Nuevo contacto";
  renderizarContacts();
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

  const contact = contactos.find((contacto) => {
    if (contacto.id === id) {
      return true;
    }
  });

  if (!contact) {
    alert("Contacto no encontrado");
    return;
  }

  listEdit = contact;

  addNewFormHTML.elements.name.value = contact.name;
  addNewFormHTML.elements.lastName.value = contact.lastName;
  addNewFormHTML.elements.email.value = contact.email;
  addNewFormHTML.elements.areacode.value = contact.areacode;
  addNewFormHTML.elements.phone.value = contact.phone;
  addNewFormHTML.elements.birthday.value = contact.birthday;

  if (listEdit.profilePhoto !== "file") {
    listEdit.profilePhoto.value = contact.profilePhoto.value;
  } else {
    listEdit.profilePhoto.value = "";
  }

  buttonSubmit.classList.remove("btn-primary");
  buttonSubmit.classList.add("btn-success");
  buttonSubmit.textContent = "Editar";

  const buttonReset = document.getElementById("buttonReset");
  buttonReset.classList.remove("d-none");
}

function deleteContact(id) {
  Swal.fire({
    title: "¿Estás seguro de que deseas eliminar este contacto?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí",
  }).then((result) => {
    if (result.isConfirmed) {
      const idContact = contactos.findIndex((contact) => contact.id === id);

      if (idContact !== -1) {
        contactos.splice(idContact, 1);
        renderizarContacts();
      }

      Swal.fire({
        title: "Contacto borrado!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  });
  if (!addNewFormContainer.classList.contains("d-none")) {
    addNewFormContainer.classList.add("d-none");
    addNewFormHTML.reset();
  }
}
