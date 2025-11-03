/*Solicita al usuario que ingrese dos números e ingrese un símbolo de una operación (+, -, *, /) usando prompt. Muestra el resultado de la operación en un alert.*/
// let numero1= prompt("Digite el primer numero")
// let numero2= prompt("Digite el segundo numero")
alert ("OPERACIONES ARITMETICAS DE DOS NUMEROS")
let num1= prompt("Digite el primer numero")
let num2= prompt("Digite el segundo numero")
let resultado;
let opcion= prompt("Ingrese un símbolo de la operación a realizar (+, -, *, /)")


switch(opcion){

    case "+":
        let numero1= parseInt(num1)
        let numero2= parseInt(num2)
        resultado= numero1+numero2;
        alert (`El resultado de la suma es: ${resultado}`);
        break;

    case "-":
        resultado = num1-num2;
        alert (`El resultado de la resta es: ${resultado}`);
        break;

    case "*":
         resultado = num1*num2;
        alert (`El resultado de la multiplicacion es: ${resultado}`);
        break;

    case "/":
         resultado = num1/num2;
        alert (`El resultado de la division es: ${resultado}`);
        break;

        default:
            alert (`El simbolo o digito "${opcion}" no es un operador valido`);
}