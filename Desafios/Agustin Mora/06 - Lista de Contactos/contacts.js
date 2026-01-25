let CONTACTS = [];
let contactEditing = null;

const form = document.getElementById("contactForm");
const table = document.getElementById("contactTable");
const btnSubmit = document.getElementById("btnSubmit");


function renderContacts() {
  table.innerHTML = "";

  CONTACTS.forEach(contact => {
    table.innerHTML += `
      <tr>
        <td>${contact.name}</td>
        <td>${contact.email}</td>
        <td>${contact.phone}</td>
        <td>${formatDate(contact.birthdate)}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editContact(${contact.id})">
            Editar
          </button>
          <button class="btn btn-danger btn-sm" onclick="deleteContact(${contact.id})">
            Eliminar
          </button>
        </td>
      </tr>
    `;
  });
}


form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const birthdate = document.getElementById("birthdate").value;
  const image = document.getElementById("image").value;

  if (!name || !email || !phone || !birthdate) {
    Swal.fire("Error", "Completá todos los campos obligatorios", "error");
    return;
  }

  if (contactEditing === null) {
    const newContact = {
      id: Date.now(),
      name,
      email,
      phone,
      birthdate,
      image
    };

    CONTACTS.push(newContact);

    Swal.fire("Contacto agregado", "El contacto se guardó correctamente", "success");
  } else {
    contactEditing.name = name;
    contactEditing.email = email;
    contactEditing.phone = phone;
    contactEditing.birthdate = birthdate;
    contactEditing.image = image;

    Swal.fire("Contacto actualizado", "El contacto fue modificado", "info");
    contactEditing = null;
    btnSubmit.textContent = "Guardar contacto";
  }

  form.reset();
  renderContacts();
});


function editContact(id) {
  const contact = CONTACTS.find(c => c.id === id);
  if (!contact) return;

  contactEditing = contact;

  document.getElementById("name").value = contact.name;
  document.getElementById("email").value = contact.email;
  document.getElementById("phone").value = contact.phone;
  document.getElementById("birthdate").value = contact.birthdate;
  document.getElementById("image").value = contact.image || "";

  btnSubmit.textContent = "Editar contacto";
}


function deleteContact(id) {
  Swal.fire({
    title: "¿Eliminar contacto?",
    text: "Esta acción no se puede deshacer",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Eliminar",
    cancelButtonText: "Cancelar"
  }).then(result => {
    if (result.isConfirmed) {
      CONTACTS = CONTACTS.filter(c => c.id !== id);
      renderContacts();
      Swal.fire("Eliminado", "Contacto eliminado correctamente", "success");
    }
  });
}


function formatDate(date) {
  return date.split("-").reverse().join("-");
}

renderContacts();
