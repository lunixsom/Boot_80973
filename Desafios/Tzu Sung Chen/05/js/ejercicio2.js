/*Escribe un programa que use un bucle para imprimir todos los números del 1 al 50. Sin 
embargo, solo debe mostrar los números pares. (% modulo)*/

for (let i = 1; i <= 50; i++) {
  if ((i % 2 === 0)) {
    console.log(i);
  }
}
