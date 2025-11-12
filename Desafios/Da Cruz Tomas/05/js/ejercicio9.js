let primerNum = parseFloat(prompt("Introduce el primer número"));
let segundoNum = parseFloat(prompt("Introduce el segundo número"));
let operacion = prompt("Introduce el símbolo para la operación (Ej: +, -, *, /");

let resultado;

switch (operacion) {
    case "+": 
        resultado = primerNum + segundoNum;
        break;
    case "-":
        resultado = primerNum - segundoNum;
        break;
    case "*":
        resultado = primerNum * segundoNum;
        break;
    case "/":
        resultado = primerNum / segundoNum;
        break;
    default:
        resultado = "Operación no válida"
        break;
}

alert(`El resultado es: ${resultado}`)