function invertirNumeroConBucle(numero) {
  if (numero < 0) {
    return "El número debe ser positivo.";
  }
  let numeroInvertido = 0;
  while (numero > 0) {
    const digito = numero % 10; 
    numeroInvertido = numeroInvertido * 10 + digito;  
    numero = Math.floor(numero / 10); 
  }
  return numeroInvertido;
}

const numeroOriginal = 123453;
const resultado = invertirNumeroConBucle(numeroOriginal);
console.log(resultado);
