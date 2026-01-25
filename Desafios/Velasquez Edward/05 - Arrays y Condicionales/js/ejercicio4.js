/*Dado un array de números [23, 45, 12, 67, 34, 89, 21], escribe un programa que use un bucle para encontrar el número más grande. Usa condicionales para comparar los valores*/

const ListNum=[23, 45, 12, 67, 34, 89, 21]
const Lista=ListNum.join('\n');

console.log ("LISTA DE NUMEROS:")
console.log (Lista);

let max=23;

for (let i=0; i<7; i++){
    if (ListNum[i] > max){
   max=ListNum[i];
}
}
console.log ("El numero mas grande entre todo es:")
console.log (max);