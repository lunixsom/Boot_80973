/*Crea un programa que use un bucle para generar un triángulo de asteriscos con la siguiente forma, donde el número de filas lo elija el usuario:*/
alert ("GENERAR UN TRIANGULO DE ASTERISCOS");
let filas=prompt("Digite el numero de filas");

for(let i = 1; i <= filas; ++i) {
    let resultado = '';

    for(let x= 1; x <= i; ++j) {
        resultado += '* ';
    }
    document.write("<br>"+resultado);
}