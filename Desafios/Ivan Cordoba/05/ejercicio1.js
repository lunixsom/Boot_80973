

//Dado un array de números [12, -5, 7, -3, 9, -8, 15, 3, -25, 40, -33, -9], escribe un programa que recorra el array con un bucle e imprima por consola únicamente los números positivos.

const array = [12, -5, 7, -3, 9, -8, 15, 3, -25, 40, -33, -9];
const array2 = [];

for(let i = 0; i < array.length; i++){
    if (array[i] > 0){
        array2.push(array[i]);
    }
}

console.log(array2);


