let radio = parseFloat(prompt("Introduce el radio del círculo"));

let perimetro = 2 * Math.PI * radio;

let area = Math.PI * Math.pow(radio, 2)

console.log(`Para un círculo con radio ${radio}, el perímetro es ${perimetro} y el área es ${area}`)