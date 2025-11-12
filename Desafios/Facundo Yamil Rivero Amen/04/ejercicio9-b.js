let numero1 = Number(prompt("Ingrese el valor 1"));
let numero2 = Number(prompt("Ingrese el valor 2"));
let operacion = prompt("Ingrese la operación (+, -, *, /)");

let resultado;

switch (operacion) {
    case "+":
       resultado = numero1 + numero2
        break;

    case "-":
      resultado = numero1 - numero2
        break;

    case "*":
    resultado = numero1 * numero2
        break;

    case "/":
     resultado =  numero1 / numero2
        break;

    default:
    alert (`OPERACION INVALIDA`)
}
alert (`el resultado es ${resultado}`)