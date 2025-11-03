/*12.	Películas o series para ver
Define un array miListaDePendientes con títulos de cuatro películas o series que quieres ver.
•	Pide al usuario que ingrese una nueva película y usa el método push para agregar la película al final del array. 
•	Modifica el nombre de la 4ta película del array por una nueva.
•	Muestra el array actualizado por consola.*/

const miListaDePendientes= ["Los vengadores","X men","Liga de la justicia","Transformers"]
console.log (miListaDePendientes)

let pelicula=prompt("Digite el nombre de una nueva pelicula")
miListaDePendientes.push(pelicula)
console.log (miListaDePendientes)

miListaDePendientes.splice (3,1,"G.I. joe")
console.log (miListaDePendientes)