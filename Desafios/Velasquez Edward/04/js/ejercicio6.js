/*Solicita al usuario el radio de un círculo y calcula el perímetro usando la fórmula P=2πr y también calcula su área. Muestra el resultado en la consola.*/

let radio=prompt("Digite el radio del circulo");
const pi=3.1416;
const area=pi * (radio**2);
const perimetro=(2*pi)*radio;

console.log("El area del circulo es:" + area);
console.log("El perimetro del circulo es:" + perimetro);