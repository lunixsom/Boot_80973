let lista = [
    "Leche",
    "Huevos",
    "Pollo",
    "Manzana",
    "Cebolla",
    "Jabón",
    "Arroz",
];

console.log("Lista de compras:")
for (let producto of lista) {
    console.log(`-${producto}`);
}

lista.push("Aceite");

console.log(lista)

lista[2] = "Queso"

console.log(lista)