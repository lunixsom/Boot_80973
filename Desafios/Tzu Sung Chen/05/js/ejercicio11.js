/*Escribe un programa que solicite al usuario una palabra y use un bucle para contar cuántas 
vocales tiene. Usa condicionales para verificar si cada letra es una vocal.*/

let palabra = String(prompt("Ingrese una palabra")).toLowerCase()
let letras = palabra.split('',)
let vocales = 0

for (let letra of letras){

    if ( letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        vocales += 1
    }

}

console.log(`En la palabra ${palabra} hay ${vocales} vocales.`)