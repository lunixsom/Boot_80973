let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intento;

while (true) {
  intento = parseInt(prompt("Adivina el número (entre 1 y 10):"));

  if (intento === numeroSecreto) {
    console.log("🎉 ¡Felicidades! Adivinaste el número 🎉");
    break;
  } else if (intento > numeroSecreto) {
    console.log("El número es menor. Intenta de nuevo.");
  } else if (intento < numeroSecreto) {
    console.log("El número es mayor. Intenta de nuevo.");
  } else {
    console.log("Por favor ingresa un número válido.");
  }
}
