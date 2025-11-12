let radio = parseFloat(prompt("Ingresa el radio del círculo:"));
let perimetro = 2 * Math.PI * radio;
let areaCirculo = Math.PI * Math.pow(radio, 2);
console.log(`El perímetro del círculo es: ${perimetro.toFixed(2)}`);
console.log(`El área del círculo es: ${areaCirculo.toFixed(2)}`);