const radio = parseFloat(prompt("Ingresa el radio del círculo:"));

if (!isNaN(radio)) {
  const perimetro = 2 * Math.PI * radio;

  console.log("El perímetro del círculo es: " + perimetro);
} else {
  console.log("Por favor, ingresa un número válido para el radio.");
}
