let numero1 = Number(prompt("ingrese el valor 1"));
let numero2 = Number(prompt("Ingrese el valor 2"));
let operacion = prompt("Ingrese la operacion (+ , - , *, /)");
let resultado;

if (operacion === "+") {
    let resultado = numero1 + numero2}

    else if (operacion === "-") {
         resultado = numero1 - numero2}

    else if ( operacion === "*") {
        resultado = numero1 * numero2
    }
    else if (operacion === "/") {
         resultado = numero1 / numero2
    }
alert (`el resultado es ${resultado}`)