let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let operacion = prompt("Ingrese la operación (+, -, *, /):");
let resultado;

if (operacion === "+") {
  resultado = numero1 + numero2;
} else if (operacion === "-") {
  resultado = numero1 - numero2;
} else if (operacion === "*") {
  resultado = numero1 * numero2;
} else if (operacion === "/") {
  resultado = numero2 !== 0 ? numero1 / numero2 : "No se puede dividir por cero";
} else {
  resultado = "Operación no válida";
}

alert(`El resultado de ${numero1} ${operacion} ${numero2} es: ${resultado}`);
console.log(`Resultado: ${resultado}`);