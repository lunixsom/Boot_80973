let radio = Number(prompt("ingresa el radio del circulo"))

let perimetro = 2 * Math.PI * radio;

let area = Math.PI * radio * radio

console.log (`Tu perimetro es , ${perimetro} y tu area es ${area}`);

alert (`Tu perimetro es, ${perimetro.toFixed(2)} y tu area es ${area.toFixed(2)}`);