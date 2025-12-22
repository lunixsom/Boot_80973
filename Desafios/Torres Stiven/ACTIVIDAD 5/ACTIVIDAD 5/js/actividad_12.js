const numeroSecreto = Math.floor(Math.random() * 10) + 1;

let adivinanza = 0;

while (adivinanza !== numeroSecreto) {
  adivinanza = parseInt(prompt("Adivina el número (entre 1 y 10):"));

  if (adivinanza === numeroSecreto) {
    alert("¡Correcto! 🎉 Adivinaste el número.");
  } else if (adivinanza < numeroSecreto) {
    alert("El número secreto es MAYOR.");
  } else if (adivinanza > numeroSecreto) {
    alert("El número secreto es MENOR.");
  } else {
    alert("Ingresa un número válido.");
  }
}