let num1 = prompt("Ingresa el primer número:");
let num2 = prompt("Ingresa el segundo número:");
let operacion = prompt("Ingresa la operación a realizar (+, -, *, /):");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let resultado;

switch (operacion) {
  case "+":
    resultado = num1 + num2;
    break;
  case "-":
    resultado = num1 - num2;
    break;
  case "*":
    resultado = num1 * num2;
    break;
  case "/":
    if (num2 !== 0) {
      resultado = num1 / num2;
    } else {
      alert("Error: No se puede dividir por cero.");
      exit(); 
    }
    break;
  default:
    alert("Operación no válida.");
    exit();
}

alert("El resultado es: " + resultado);
