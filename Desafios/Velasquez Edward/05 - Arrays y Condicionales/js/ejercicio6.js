/*Usa un bucle para imprimir los números del 1 al 50. Si el número es divisible entre 3, imprime "Fizz". Si es divisible entre 5, imprime "Buzz". Si es divisible entre ambos, imprime "FizzBuzz".*/

let contador = 1;
document.write("Numeros divisibles entre 3 del 1 al 50:<br>");

while (contador <= 50){

    let resto = contador % 3;
    if (resto===0){
        document.write(`<br> ${contador} es divisible entre 3: Fizz`);
    } 
contador++;
    }

    let contador2 = 1;
    document.write("<br><br> Numeros divisibles entre 5 del 1 al 50:<br>");

   while (contador2 <= 50){

    let resto = contador2 % 5;
    if (resto===0){
        document.write(`<br> ${contador2} es divisible entre 5: Buzz`);
    } 
contador2++;
    }

    let contador3;
    document.write("<br><br> Numeros divisibles entre ambos del 1 al 50:<br>");

   for (contador3 = 1;  contador3 <= 50; contador3 ++){

    if ((contador3 % 3 === 0) && (contador3 % 5 === 0)){
        document.write(`<br> ${contador3} es divisible entre 3 y 5: FizzBuzz`);
    } 

    }