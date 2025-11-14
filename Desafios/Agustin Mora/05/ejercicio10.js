let palabras = prompt("Ingresa palabras separadas por comas:").split(",");

for (let i = 0; i < palabras.length; i++) {
  let palabra = palabras[i].trim().toLowerCase();
  let invertida = palabra.split("").reverse().join("");
  
  if (palabra === invertida) {
    console.log(`${palabra} es un palíndromo`);
  } else {
    console.log(`${palabra} no es un palíndromo`);
  }
}
