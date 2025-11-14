//4. Dado un array de números [23, 45, 12, 67, 34, 89, 21], escribe un programa que use un bucle para encontrar el número más grande. Usa condicionales para comparar los valores

const numeros=[23, 45, 12, 67, 34, 89, 21];
let mayorNum=0;
for(const num of numeros){
    if(num>mayorNum){
        mayorNum=num;
    }
}
console.log(`El mayor de los numeros es ${mayorNum}`)