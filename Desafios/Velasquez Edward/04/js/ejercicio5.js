/*Pide al usuario tres números, calcula el promedio y muestra el resultado en la consola.*/
alert ("CALCULAR PROMEDIO DE TRES NUMEROS")
let num1=prompt("Escriba el primer digito");
let num2=prompt("Escriba el segundo digito");
let num3=prompt("Escriba el tercer digito");

let x=parseInt(num1)
let y=parseInt(num2)
let z=parseInt(num3)

const promedio=(x+y+z)/3

console.log("El promedio total es:" + promedio);