/*Escribe un programa que solicite al usuario una palabra y use un bucle para contar cuántas vocales tiene. Usa condicionales para verificar si cada letra es una vocal.*/ 

let vocales = ["a","e","i","o","u",];

alert("Contador de vocales"); 

let palabra=prompt("Digite una palabra o frase");

function contarvocales (cadena){
let contador = 0;

for (let i of cadena.toLowerCase()){
    if (vocales.includes(i)){
        contador++;
        
    }

}
document.write("PALABRA ORIGINAL: "+ palabra);
document.write("<br>CONTIENE: " + contador + " VOCALES");

}
contarvocales(palabra);

