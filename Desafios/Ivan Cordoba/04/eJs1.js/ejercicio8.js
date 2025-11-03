let valor = parseFloat(prompt('Ingresa el precio del producto en dolares: '));

let iva = 0.21;
let ganancia = 0.30;
let precioPesos = (valor * 1530) + (valor * 1530 * iva);
let precioPesosFinal = precioPesos + (precioPesos * ganancia);


alert(`El precio del producto en pesos es de: ${precioPesosFinal} pesos.`);
