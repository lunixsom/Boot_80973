/*Dado un array de números [12, -5, 7, -3, 9, -8, 15, 3, -25, 40, -33, -9], escribe un programa que recorra el array con un bucle e imprima por consola únicamente los números positivos.*/

const numeros=[12, -5, 7, -3, 9, -8, 15, 3, -25, 40, -33, -9]
const Lista=numeros.join('\n');

console.log ("LISTA DE NUMEROS:")
console.log (Lista);

console.log ("Los numeros positivos son:")
for (let i=0; i<12; i++){
    if (numeros[i] > 0){
    console.log (numeros[i])
}
}
