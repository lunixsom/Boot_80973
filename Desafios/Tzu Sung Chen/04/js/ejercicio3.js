/* Pide al usuario un número y muestra en un alert si el número es par o impar (condición). */

let numero = Number(prompt("Por favor, inserte un número"));

const resto = numero % 2;

if (resto === 0) {
    alert("Es un número par")
} else if (resto !== 0) {
    alert("Es un número impar")
} else {
    alert("No es un número")
}

console.log("Fin del programa")