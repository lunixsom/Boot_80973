function esPalindromo(palabra) {
  const palabraNormalizada = palabra.toLowerCase().replace(/\s/g, '');
  const palabraInvertida = palabraNormalizada.split('').reverse().join('');
  return palabraNormalizada === palabraInvertida;
}

const palabrasIngresadas = prompt("Ingresa una lista de palabras separadas por comas:");

if (palabrasIngresadas) {
  const palabras = palabrasIngresadas.split(',');

  console.log("Las palabras palíndromas encontradas son:");

  for (let i = 0; i < palabras.length; i++) {
    const palabraActual = palabras[i].trim(); 
    if (esPalindromo(palabraActual)) {
      
      console.log(palabraActual);
    }
  }
} else {
  console.log("No se ingresó ninguna palabra.");
}
