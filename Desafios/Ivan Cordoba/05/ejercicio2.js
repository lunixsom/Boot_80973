

//Escribe un programa que use un bucle para imprimir todos los números del 1 al 50. Sin embargo, solo debe mostrar los números pares. (% modulo)

let numerosPares = [];

for(let i = 2; i <= 50; i++){
    if(i % 2 === 0){
        numerosPares.push(i);
    }
}

resultadoFinal = numerosPares.join(', ');
console.log(resultadoFinal)




