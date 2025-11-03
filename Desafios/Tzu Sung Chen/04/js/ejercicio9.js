/* Solicita al usuario que ingrese dos números e ingrese un símbolo de una operación (+, -, *, /) usando prompt. Muestra el resultado de la operación en un alert. 🔴
Tip: Condicionales if elseif, o switch
 */

let num1 = Number(prompt(`Ingrese el primer num:`));
let num2 = Number(prompt(`Ingrese el segundo num:`));
let operacion = prompt(`Ingrese la operación deseada: + para suma, - para resta, * para multiplicacion y / para división`)

if ( operacion === "+"){
    calculo = num1 + num2
    alert(`La suma de los números ${num1} y ${num2} es de ${calculo}`)
} else if (operacion === "-"){
    calculo = num1 - num2
    alert(`La resta de los números ${num1} y ${num2} es de ${calculo}`)
} else if (operacion === "*"){
    calculo = num1 * num2
    alert(`El producto de los números ${num1} y ${num2} es de ${calculo}`)
} else if (operacion === "/"){
    calculo = num1 / num2
    alert(`La división de los números ${num1} y ${num2} es de ${calculo}`)
} else {
    alert(`La operación elegida no es válida`)
}