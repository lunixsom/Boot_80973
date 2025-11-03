/* Calcular el IVA de un producto
Solicita al usuario el precio de un producto en dolares y su precio final a pesos (1dolar = $1530), además tenemos que sumarle el IVA (21%) y además le vamos a sumar la ganancia de la tienda que es un 30%. Muestra el precio total en un alert.
 */

const dolar = 1530;
const precio = Number(prompt(`Ingrese el precio del producto:`));
const iva = 1.21
const ganancia = 1.3

let preciofinal = precio * dolar * iva * ganancia
alert(`El precio final del producto es ${preciofinal}`);
