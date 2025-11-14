/*Pide al usuario un número entero positivo y usa un bucle para invertirlo. Por ejemplo, si el 
usuario ingresa 12345, el programa debe devolver 54321.*/

let num = Number(prompt("Ingrese un número entero positivo grande"));
let numInverso = 0;

while (num > 0) {
  let resto = num % 10;
  numInverso = numInverso * 10 + resto;
  num = Math.floor(num / 10);
}

console.log(numInverso)
