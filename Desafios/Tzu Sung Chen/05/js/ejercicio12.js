/*Crea un programa que genere un número aleatorio entre 1 y 10. Luego usa un bucle para 
permitir al usuario adivinar el número. Si el usuario adivina correctamente, felicítalo y detén 
el bucle. Si no, indica si el número que ingresó es mayor o menor al número generado.*/

let numMisterioso = Math.floor(Math.random() * 10 + 1);
let num = Number(prompt("Adivina el número del 1 al 10"));

while (num !== numMisterioso) {
  if (num < numMisterioso) {
    console.log(`Ingresaste ${num}. El número misterioso es mayor, intente nuevamente.`);
    num = Number(prompt("Adivina el número del 1 al 10"));
  } else if (num > numMisterioso) {
    console.log(`Ingresaste ${num}.El número misterioso es menor, intente nuevamente.`);
    num = Number(prompt("Adivina el número del 1 al 10"));
  }
}
console.log(`Ingresaste ${num}. Felicitaciones! Adivinaste el número!`);
