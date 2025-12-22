let numeroIngresado = prompt("Por favor, ingresa un número:");
let numero = parseInt(numeroIngresado);

if (isNaN(numero)) {
  alert("Por favor, ingresa un número válido.");
} else if (numero % 2 === 0) {
  alert("El número " + numero + " es PAR.");
} else {
  alert("El número " + numero + " es IMPAR.");
}
