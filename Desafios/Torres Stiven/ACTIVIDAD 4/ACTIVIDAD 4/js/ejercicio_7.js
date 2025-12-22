let minutos = prompt("Por favor, introduce un número de minutos:");

if (minutos !== null && !isNaN(minutos)) {
  minutos = parseInt(minutos);
 
  const segundos = minutos * 60;
  const horas = minutos / 60;
 
  alert(`${minutos} minutos son:
${segundos} segundos
${horas} horas`);
} else {
  alert("Por favor, introduce un número de minutos válido.");
}
