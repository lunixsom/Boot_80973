/*Crea un programa que solicite al usuario una lista de palabras separadas por comas. Usa 
un bucle para verificar cuáles de esas palabras son palíndromas y muéstralas. Una palabra 
es palíndroma si se lee igual al derecho y al revés.*/

let lista = String(prompt("Ingrese cinco palabras separadas por una coma"));

let palabras = lista.split(",").map((palabras) => palabras.trim());

const palindromos = [];

for (let palabra of palabras) {
  const palabraLimpia = palabra.toLowerCase();
  
  const palabraInvertida = palabraLimpia.split("").reverse().join("");

  if (palabraLimpia === palabraInvertida) {
    palindromos.push(palabra);
  }
}

if (palindromos.length === 0) {
  console.log("Las palabras ingresadas no son palindromos.");
} else {
  console.log(`Las palabras palidrimas encontradas son: ${palindromos}.`);
}

