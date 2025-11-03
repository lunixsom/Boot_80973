/* Tu lista de compras
Crea un array llamado listaDeCompras con siete cosas que comprarías en tu próxima visita al supermercado. Muestra cada elemento del array en la consola. 
-	Además luego de definir la lista le van a agregar un elemento al final del array (push) como nuevo producto a comprar. 
-	Vamos a tomar el producto en el índice 2 y lo van a reemplazar por nuevo
 */

const listaDeCompras = ["leche","harina","huevos","arroz","pan","manteca","gaseosa"]


for (let producto of listaDeCompras) {

    console.log(producto)
}

listaDeCompras.push("galletas")
console.log(listaDeCompras)

listaDeCompras[2] = "lentejas"
console.log(listaDeCompras)