let precioEnDolares = parseFloat(prompt("Introduce el precio del producto en dólares:"));

const tasaCambio = 1130;
const porcentajeIVA = 0.21; // 21%

let precioEnPesos = precioEnDolares * tasaCambio;

let precioFinalConIVA = precioEnPesos * (1 + porcentajeIVA);

alert(`El precio total con IVA es: $${precioFinalConIVA.toFixed(2)}`);