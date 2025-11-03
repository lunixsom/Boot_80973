let num1 = parseFloat(prompt('Ingrese el primer número: '));
let num2 = parseFloat(prompt('Ingrese el segundo número: '));
let operación = prompt('Ingrese el símbolo de la operación matemática que desea realizar (+, -,  *, /):');

switch (operación) {
    case "+":  num1 + num2;
        alert(`El resultado de la suma es: ${num1 + num2}`);
        break;
    case "-":  num1 - num2;
        alert(`El resultado de la resta es: ${num1 - num2}`);
        break;
    case "*": num1 * num2;
        alert(`El resultado de la multiplicación es: ${num1 * num2}`);
        break;
        case "/": num1 / num2;
        alert(`El resultado de la división es; ${num1 / num2}`);
        break;
        default: 
        alert(`Operación no válida`);
        break;
    }
