//Escribe un programa que solicite al usuario una palabra y use un bucle para contar cuántas vocales tiene. Usa condicionales para verificar si cada letra es una vocal.

let texto = prompt('Introduca un texto: ');

let vocales = ['a', 'e', 'i', 'o', 'u'];

//Paso a minusculas de las letras introducidas
let textoMin = texto.toLowerCase();

//Declaración de la variable que va a contener la cantidad de vocales
let cantidadVocales = 0;

//Recorre todas las letras del texto
for(let i = 0; i < textoMin.length; i++){
    
    //Verifica si hay vocales, y si hay las cuenta  
    if(vocales.includes(textoMin[i])){
        cantidadVocales ++;
       }   
       
    }
    
console.log(`La Cantidad de vocales encontradas es: ${cantidadVocales}`)

