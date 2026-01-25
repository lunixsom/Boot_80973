/*Crea un programa que pida al usuario un número del 1 al 100 y use un bucle para imprimir la tabla de multiplicar de ese número. Si la multiplicación da como resultado un número mayor a 1000, detén el bucle.*/

alert ("MOSTRAR TABLA DE MULTIPLICAR");
let numero=prompt("Digite un numero del 1 al 100");

for(let multiplo = 1; multiplo <=10; multiplo++){
    let resultado = numero * multiplo;
    if(resultado>+1000){
        break
    }
    document.write(`${numero} * ${multiplo} = ${resultado} <br>`)
}

