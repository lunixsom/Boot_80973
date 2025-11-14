//Pide al usuario un número entero positivo y usa un bucle para invertirlo. Por ejemplo, si el usuario ingresa 12345, el programa debe devolver 54321.

let numeroPositivo = prompt('Ingrese un número entero positivo: ');
let numeroInvertido = '';


for(let i = numeroPositivo.length-1; i >= 0; i--){
    

    numeroInvertido += numeroPositivo[i];
}

console.log(numeroInvertido);
