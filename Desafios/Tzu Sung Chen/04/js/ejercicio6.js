/* Solicita al usuario el radio de un círculo y calcula el perímetro usando la fórmula P=2πr y también calcula su área. Muestra el resultado en la consola. */

const radio = Number(prompt(`Ingrese el radio del círculo:`));
const perimetro = 2 * (Math.PI) * radio
const area = (Math.PI) * Math.pow(radio,2)

console.log(`El perímetro del círculo es ${perimetro}`)
console.log(`El área del círculo es ${area}`)