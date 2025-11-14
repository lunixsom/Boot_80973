// 2. Escribe un programa que use un bucle para imprimir todos los números del 1 al 50. Sin embargo, solo debe mostrar los números pares. (% modulo)
const numMaximo=50;
for(let i=1;i<=numMaximo;i++){
    if(i%2==0){
        console.log(`El numero ${i} es un numero par`)
    }
}