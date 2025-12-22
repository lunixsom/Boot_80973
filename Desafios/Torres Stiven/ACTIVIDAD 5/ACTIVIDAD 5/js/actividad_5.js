function crearTriangulo(numFilas) {

  for (let i = 0; i < numFilas; i++) {
    let fila = '';
    
    for (let j = 0; j < numFilas - 1 - i; j++) {
      fila += ' ';
    }
    
    for (let k = 0; k < 2 * i + 1; k++) {
      fila += '*';
    }
    
    console.log(fila);
  }
}

let filasUsuario = prompt("Ingresa el número de filas para el triángulo:");
let numeroDeFilas = parseInt(filasUsuario);

if (isNaN(numeroDeFilas) || numeroDeFilas <= 0) {
  console.log("Por favor, ingresa un número válido y positivo.");
} else {
  crearTriangulo(numeroDeFilas);
}
