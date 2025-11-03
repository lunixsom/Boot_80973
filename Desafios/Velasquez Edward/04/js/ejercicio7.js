/*Pide al usuario un número de minutos. Convierte ese valor a segundos y también a horas. Muestra los resultados por consola.*/
alert ("CONVERTIR MINUTOS A SEGUNDOS Y HORAS")
let minutos=prompt("Digite los minutos a convertir");

let horas= Math.floor (minutos/60)
let min= minutos%60
let horacompleta= horas +" horas con " + min + " minutos"
let seg= minutos*60
let segundos= seg +" segundos "

console.log("el numero de segundos transcurridas son:"+ segundos +"");
console.log("el numero de horas transcurridas son:"+ horacompleta +"");