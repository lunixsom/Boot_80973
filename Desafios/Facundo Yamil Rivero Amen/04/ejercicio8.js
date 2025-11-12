let precioEnDolares = Number (prompt("ingresa el valor del producto  en usd"));
let precioEnPesos = precioEnDolares * 1530;
let precioMasIva = precioEnPesos + precioEnPesos * 0.21 ;
let precioGanancia = precioMasIva * 1.30 ;

console.log (`el precio final en pesos es ${precioGanancia}`);
alert (`el precio final en pesos es ${precioGanancia} ars compuesto de 21% iva y 30% gastos de gestion`)