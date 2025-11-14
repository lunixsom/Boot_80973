//Dado un array de números [12, -5, 7, -3, 9, -8, 15, 3, -25, 40, -33, -9], escribe un programa que recorra el array con un bucle e imprima por consola únicamente los números positivos.

numeros=[12, -5, 7, -3, 9, -8, 15, 3, -25, 40, -33, -9];
for (const numero of numeros){
    if(numero>0){
        console.log(`El numero ${numero} es un numero positivo`)
    }
}