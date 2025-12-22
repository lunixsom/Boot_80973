// Definición del objeto auto
const miMoto = {
  marca: "BAJAJ",
  modelo: "ROUSER NS200",
  año: 2015,
  color: "gris",
  motor: {
    cilindros: 2,
    potencia_cv: 1000,
    tipo: "V12 hibrido"
  },
  kilometraje: 14000,
  transmision: "Doble embrague",
  esElectrico: false,
  caracteristicas: ["Asientos de cuero", "Sistema de infoentretenimiento", "Faros LED", "Cámara de reversa"]
};


console.log(miMoto);

document.write(`
  <p>la <strong>${miMoto.marca} ${miMoto.modelo}</strong> es una moto de alta gama, con una potencia de <strong>${miMoto.motor.potencia_cv} CV</strong>. Su diseño aerodinámico y su tecnología de vanguardia lo convierten en una máquina impresionante en la carretera.</p>
`);
