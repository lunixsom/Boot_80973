let smartPhone = {
    marca : "samsung",
    modelo : "A15",
    color : "blanco",
    año: 2025,
    paisOrigen: "china",
    precio: "240.00,00",
    nombre: "Samsung Galaxy"

}

console.log (smartPhone)


document.write(`Elegiste el ${smartPhone.nombre} ${smartPhone.modelo} en stock se encuentra solo en color ${smartPhone.color}. Este modelo es un gama media del año ${smartPhone.año} y su origen es ${smartPhone.paisOrigen}. Un excelente equipo por tan solo ${smartPhone.precio} no te lo pierdas!`);