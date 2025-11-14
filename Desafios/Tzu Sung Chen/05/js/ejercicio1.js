/*Dado un array de números [12, -5, 7, -3, 9, -8, 15, 3, -25, 40, -33, -9], escribe un programa 
que recorra el array con un bucle e imprima por consola únicamente los números positivos. */

const num = [-12, -5, 7, -3, 9, -8, 15, 3, -25, 40, -33, -9];

for ( let i = 0; i < num.length; i++){
    
    if ( num[i] > 0 ) {
        
        console.log(num[i])
    } /* else {
        continue
    } */
}
