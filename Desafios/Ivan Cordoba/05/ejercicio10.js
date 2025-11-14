//Crea un programa que solicite al usuario una lista de palabras separadas por comas. Usa un bucle para verificar cuáles de esas palabras son palíndromas y muéstralas. Una palabra es palíndroma si se lee igual al derecho y al revés.



let palabrasEntrada = prompt('Ingrese una lista de palabras: ');

//Separa las palabras con comas y saca espacios
const palabras = palabrasEntrada.split(',');

//Recorre el array para limpiar y poner todo en minisculas
for(let i = 0; i < palabras.length; i++){
    let palabra = palabras[i].trim().toLowerCase();
    let palabraInvertida = '';

//Recorre el array de manera inversa para invertir la palabra
for(let j = palabra.length-1; j >= 0; j--){
    palabraInvertida += palabra[j];
         
}


//Realiza la comparacion de las palabras
if (palabra === palabraInvertida){
        console.log(`La palabra ${palabra} es Palíndroma`);
    }else{
        console.log(`La palabra ${palabra} no es Palíndroma`);
    }
}