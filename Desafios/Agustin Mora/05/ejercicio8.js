let num = prompt("Ingresa un número positivo:");
let invertido = "";

for (let i = num.length - 1; i >= 0; i--) {
  invertido += num[i];
}

console.log("Número invertido:", parseInt(invertido));
