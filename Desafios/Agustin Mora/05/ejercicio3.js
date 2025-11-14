let numero = parseInt(prompt("Ingresa un número del 1 al 100:"));

for (let i = 1; i <= 10; i++) {
  let resultado = numero * i;
  if (resultado > 1000) {
    console.log("Resultado mayor a 1000, se detiene el bucle.");
    break;
  }
  console.log(`${numero} x ${i} = ${resultado}`);
}
