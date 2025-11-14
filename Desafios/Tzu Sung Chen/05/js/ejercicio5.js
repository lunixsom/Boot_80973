/*Crea un programa que use un bucle para generar un triángulo de asteriscos con la siguiente 
forma, donde el número de filas lo elija el usuario:*/

let cantidad = Number(prompt("Ingrese un número"));
const simbol = "*";

if (cantidad > 0) {
  for (i = cantidad; i > 0; i--) {
    let linea = simbol.repeat(i);
    console.log(linea);
  }
} else {
  console.log("El número ingresado debe ser mayor a 0");
}
