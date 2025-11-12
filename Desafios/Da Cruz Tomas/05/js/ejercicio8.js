const tasaCambio = 1530;
const IVA = 0.21;
const ganancia = 0.30

let precioUSD = parseFloat(prompt("Introduce el precio del producto en dólares"));

let precioARS = precioUSD * tasaCambio;

let precioFinal = precioARS * (1 + IVA + ganancia);

alert(`El precio final es: $${precioFinal.toFixed(2)}`)
