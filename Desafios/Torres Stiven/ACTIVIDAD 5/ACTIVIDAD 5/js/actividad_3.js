const numero = prompt("Ingresa un número del 1 al 100:");

const num = parseInt(numero);

if (isNaN(num) || num < 1 || num > 100) {
  console.log("Por favor, ingresa un número válido entre 1 y 100.");
} else {
  for (let i = 1; i <= 10; i++) {
    const resultado = num * i;

    if (resultado > 1000) {
      break;
    }

    console.log(`${num} x ${i} = ${resultado}`);
  }
}
