let miListaDePendientes = [
    "Dune: Part Two",
    "Shogun",
    "The Bear",
    "Midnight Bar",
];

let nuevaPelicula = prompt("Ingresa una película o serie que quieras agregar:");

miListaDePendientes.push(nuevaPelicula);

miListaDePendientes[3] = "Game Of Thrones";

console.log("Mi lista de pendientes:", miListaDePendientes);