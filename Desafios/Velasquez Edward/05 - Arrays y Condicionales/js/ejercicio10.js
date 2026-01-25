/*Crea un programa que solicite al usuario una lista de palabras separadas por comas. Usa un bucle para verificar cuáles de esas palabras son palíndromas y muéstralas. Una palabra es palíndroma si se lee igual al derecho y al revés.*/

let input=prompt("Digite una palabra");

function invertirTexto(texto) {
    return texto.split('').reverse().join('')
}
let Alreves = invertirTexto(input);
if (Alreves === input) {
alert(`la palabra: ${input}, Es Palindromo`);
} else {
 alert(`la palabra: ${input}, No Es Palindromo`);
}

   
    
    

