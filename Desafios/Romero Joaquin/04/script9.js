numero1 = parseFloat(prompt("ingrese el primer numero"))

numero2 = parseFloat(prompt("ingrese el segundo numero"))

simbolo = prompt("ingrese un simbolo (+ - * /)")

switch (simbolo) {

    case "+":
        resultado = numero1 + numero2
    break;

    case "-":
        resultado = numero1 - numero2
    break;

    case "/":
        resultado = numero1 / numero2
    break;

    case "*":
        resultado = numero1 * numero2
    break;


}

console.log("el resultado es: " + resultado)