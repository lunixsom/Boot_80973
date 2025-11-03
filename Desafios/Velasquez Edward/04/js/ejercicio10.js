/*Define un objeto auto donde se especifiquen al menos 6 propiedades que lo conformen, si se les ocurren más propiedades del número solicitado colocarlas. Mostrar el resultado en un console log. 
Hacer un document.write para mostrar un mensaje dinámico en base a 2 propiedades que hayan elegido, ejemplo:

document.write(`El auto objeto.propiedad1 es uno de los autos más potentes en el mercado alcanzando una velocidad de  object.propiedad2 por hora!`)*/

const auto= {
    marca: "FORD",
    modelo:2025,
    color: "GRIS",
    cilindraje:"1.6 cc",
    placa: "TRG538",
    caja_cambio:"AUTOMATICA",
}

document.write(`El auto de la marca ${auto.marca} viene con una caja de transmision ${auto.caja_cambio}de fabrica`)