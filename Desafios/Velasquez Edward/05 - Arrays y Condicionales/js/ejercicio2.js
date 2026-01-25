/*Escribe un programa que use un bucle para imprimir todos los números del 1 al 50. Sin embargo, solo debe mostrar los números pares. (% modulo)*/

let contador = 1;
document.write("Numeros pares del 1 al 50:");
while (contador <= 50){

    let resto = contador % 2;
    if (resto===0){
        document.write("<br>"+contador);
    }

contador++;
    }
    document.write("<br>Fin del Bucle");

