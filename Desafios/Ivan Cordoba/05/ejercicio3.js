//Crea un programa que pida al usuario un número del 1 al 100 y use un bucle para imprimir la tabla de multiplicar de ese número. Si la multiplicación da como resultado un número mayor a 1000, detén el bucle.

let numeroIngresado = parseInt(prompt("Ingrese un número del 1 al 100"));


const tablaMultiplicar = (numero) => {
    if(isNaN(numero) || numero < 1 || numero > 100){
        alert("Debe ingresar un número entre 1 y 100.");
        return;
    }

    console.log(`Iniciando la tabla del: ${numero}`)
    let result = "";


    for(let i = 1; i <= 100; i++){
        let resultadoActual = numero * i; 
    

    if(resultadoActual > 1000){
        alert(`El resultado es: ${numero} * ${i} = ${resultadoActual} es mayor de 1000, lo cual supera el limite.`);
        break;
    }
    result += `${numero} * ${i} = ${resultadoActual}`
    console.log(`Resultado: ${numero} * ${i} = ${resultadoActual}`);
   }
    

}

tablaMultiplicar(numeroIngresado);

