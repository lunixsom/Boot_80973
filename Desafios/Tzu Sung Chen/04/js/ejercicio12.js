// Películas o series para ver
// Define un array miListaDePendientes con títulos de cuatro películas o series que quieres ver.
// •	Pide al usuario que ingrese una nueva película y usa el método push para agregar la película al final del array. 
// •	Modifica el nombre de la 4ta película del array por una nueva.
// •	Muestra el array actualizado por consola.

let miListaDePendientes = ["Superman", "Superman 2", "Superman 3", "Superman 4"]

const nuevaPeli = prompt("Ingresá una nueva película:")

miListaDePendientes.push(nuevaPeli)

miListaDePendientes[3]= "Superman Spin Off"

console.log(miListaDePendientes)