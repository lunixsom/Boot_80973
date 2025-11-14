/*Escribe un programa que use un bucle para pedir al usuario números enteros. Suma esos 
números y detén el bucle cuando el acumulado sea mayor o igual a 100. Muestra el total 
acumulado.*/

let acumulado = 0;

for (i = 0; acumulado < 100; i++) {
  let num = Number(prompt("Ingrese un número entero"));
  acumulado += num;

  if (acumulado >= 100) {
    break;
  } else {
    console.log(acumulado);
  } 
}

console.log(`El número acumulado es ${acumulado}.`)