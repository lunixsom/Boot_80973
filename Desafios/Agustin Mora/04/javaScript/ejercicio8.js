let precioDolar = parseFloat(prompt("Ingrese el precio del producto en dólares:"));
let precioPesos = precioDolar * 1400; 
let iva = precioPesos * 0.21;
let ganancia = precioPesos * 0.30; 
let precioFinal = precioPesos + iva + ganancia;

alert(`El precio final del producto en pesos es: $${precioFinal.toFixed(2)}`);
console.log(`Precio base: $${precioPesos.toFixed(2)} | IVA: $${iva.toFixed(2)} | Ganancia: $${ganancia.toFixed(2)} | Total: $${precioFinal.toFixed(2)}`);
