/*Pide al usuario un número y muestra en un alert si el número es par o impar (condición).*/
alert ("MOSTRAR SI NUMERO ES PAR O IMPAR")
let numero=prompt("Digite un numero");
const resultado = numero % 2;
if (resultado === 1){
    alert("El numero "+ numero +" es impar" );
}else{
    alert("El numero "+ numero +" es par" );
}
