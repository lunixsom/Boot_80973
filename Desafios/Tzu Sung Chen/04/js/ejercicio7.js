/* Pide al usuario un número de minutos. Convierte ese valor a segundos y también a horas. Muestra los resultados por consola. */

const min = Number(prompt(`Ingrese los minutos:`));
const seg = min * 60;
const hora = min / 60;



if ( hora <= 1 & min > 1){

console.log(`Ingresó ${min} minutos que equivalen a ${seg} segundos o ${hora} hora`)

} else if (min <= 1) { 

console.log(`Ingresó ${min} minuto que equivalen a ${seg} segundos o ${hora} hora`)

} else {

console.log(`Ingresó ${min} minutos que equivalen a ${seg} segundos o ${hora} horas`)

}
    

