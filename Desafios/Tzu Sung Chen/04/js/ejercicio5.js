/* Pide al usuario tres números, calcula el promedio y muestra el resultado en la consola */

const suma = [];
const cantnum = 3;

for(let i = 0; i < cantnum; i++){
    const num = Number(prompt(`Ingrese un número`));
    suma.push(num)
}

let sumanum = 0;

for(let i = 0; i < suma.length; i++){
    sumanum += suma[i]
}

const promedio = sumanum / suma.length;

console.log(`El promedio es ${promedio}`)
