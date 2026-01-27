const contactForm = document.getElementById('contactForm');
const contactList = document.getElementById('contactList');
const submitBtn = document.getElementById('submitBtn');
let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

// Renderizar la lista al cargar
renderContacts();

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const contactData = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        fechaNacimiento: document.getElementById('fechaNacimiento').value
    };

    const editIndex = document.getElementById('editIndex').value;

    if (editIndex === "") {
        // Crear nuevo
        contacts.push(contactData);
    } else {
        // Editar existente
        contacts[editIndex] = contactData;
        document.getElementById('editIndex').value = "";
        submitBtn.textContent = "Guardar Contacto";
    }

    localStorage.setItem('contacts', JSON.stringify(contacts));
    contactForm.reset();
    renderContacts();
});

function renderContacts() {
    contactList.innerHTML = '';
    contacts.forEach((contact, index) => {
        const row = `
            <tr>
                <td>${contact.nombre}</td>
                <td>${contact.email}</td>
                <td>${contact.telefono}</td>
                <td>${contact.fechaNacimiento}</td>
                <td>
                    <button class="btn-edit" onclick="editContact(${index})">Editar</button>
                    <button class="btn-delete" onclick="deleteContact(${index})">Eliminar</button>
                </td>
            </tr>
        `;
        contactList.innerHTML += row;
    });
}

function deleteContact(index) {
    if (confirm('¿Estás seguro de eliminar este contacto?')) {
        contacts.splice(index, 1);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        renderContacts();
    }
}

function editContact(index) {
    const contact = contacts[index];
    document.getElementById('nombre').value = contact.nombre;
    document.getElementById('email').value = contact.email;
    document.getElementById('telefono').value = contact.telefono;
    document.getElementById('fechaNacimiento').value = contact.fechaNacimiento;
    document.getElementById('editIndex').value = index;
    submitBtn.textContent = "Actualizar Contacto";
}
