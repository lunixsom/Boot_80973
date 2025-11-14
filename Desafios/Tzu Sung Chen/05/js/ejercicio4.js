/*Dado un array de números [23, 45, 12, 67, 34, 89, 21], escribe un programa que use un 
bucle para encontrar el número más grande. Usa condicionales para comparar los valores*/

const num = [23, 45, 12, 67, 34, 89, 21];
let numMasGrande = num[0]

for ( let i = 1 ; i < num.length ; i++){

    if ( num[i] > numMasGrande ){
        numMasGrande = num[i]
    }
}

console.log(`El número más grande es ${numMasGrande}`)