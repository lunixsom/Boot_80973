let minutos = parseFloat(prompt("Ingresa una cantidad de minutos:"));
let segundos = minutos * 60;
let horas = minutos / 60;
console.log(`${minutos} minutos equivalen a ${segundos} segundos o ${horas.toFixed(2)} horas.`);