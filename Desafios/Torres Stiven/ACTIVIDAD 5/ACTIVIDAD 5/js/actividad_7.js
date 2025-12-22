let total = 0;
let numero;

while (total < 100) {
  numero = prompt("Introduce un número entero:");
  
  if (numero === null || numero === "") {
    alert("Operación cancelada.");
    break;
  }
  
  const numeroEntero = parseInt(numero);
  if (isNaN(numeroEntero)) {
    alert("Por favor, introduce un número entero válido.");
    continue;
  }
  total += numeroEntero;
}

alert("El total acumulado es: " + total);
