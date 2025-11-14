//Crea un programa que genere un número aleatorio entre 1 y 10. Luego usa un bucle para permitir al usuario adivinar el número. Si el usuario adivina correctamente, felicítalo y detén el bucle. Si no, indica si el número que ingresó es mayor o menor al número generado.

//Se genera el numero aleatorio entre 1 y 10
const secreto = Math.floor(Math.random() * 10) + 1;

//Se declara la variable adivinado con el valor falso
let adivinado = false;


//Mientras se cumpla esta condición se ingresa al bucle hasta que se adivine el número
while (!adivinado) {
  let entrada = parseInt(prompt("Adivina el número entre 1 y 10"));

    let intento = entrada; 


  if (intento === secreto) {
    alert(`Adivinaste el número, que era ${secreto}`);
    adivinado = true;
  } else if (intento > secreto) {
    alert(`El número secreto es menor.`);
  } else if (intento < secreto) {
    alert(`El número secreto es mayor.`);
  } else {
    alert(`Eso no es un número válido.`);
  }

}