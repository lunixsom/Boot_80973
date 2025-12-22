let palabra = prompt("Ingresa una palabra:");
let contadorVocales = 0;


for (let i = 0; i < palabra.length; i++) {
  let letra = palabra[i].toLowerCase();

  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    contadorVocales++;
  }
}

console.log("La palabra tiene " + contadorVocales + " vocal(es).");