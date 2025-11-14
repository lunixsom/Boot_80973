/*Crea un programa que pida al usuario un número del 1 al 100 y use un bucle para imprimir 
la tabla de multiplicar de ese número. Si la multiplicación da como resultado un número 
mayor a 1000, detén el bucle.*/

let num = Number(prompt("Ingrese un número del 1 al 100"))
const limite = 1000
for ( let i = 1; i <= 1000 ; i++){
    
    let tabla = num * i
    
    if ( tabla <= limite ){
        console.log(`${num} x ${i} = ${tabla}`)
    } else {
        break
    }
}