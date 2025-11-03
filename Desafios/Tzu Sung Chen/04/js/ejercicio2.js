/* Calcular el área de un rectángulo: Pide al usuario la base y la altura de un rectángulo, y muestra el área en la consola. */

let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
let area = base * altura;

console.log(`El área del rectángulo es: ${area}`);