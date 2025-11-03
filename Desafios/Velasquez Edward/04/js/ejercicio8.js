/*Calcular el IVA de un producto
Solicita al usuario el precio de un producto en dolares y su precio final a pesos (1dolar = $1530), además tenemos que sumarle el IVA (21%) y además le vamos a sumar la ganancia de la tienda que es un 30%. Muestra el precio total en un alert.*/

let dolar=prompt("Digite el precio en dolares de un producto");
 const pesos=1530; 
 const iva=0.21;
 const ganancia=0.3;

 let precio=pesos*dolar;
 let ivatotal=precio*iva;
 let gananciatotal=precio*ganancia;
 let preciototal=(precio+ivatotal+gananciatotal);

 alert ("El precio total es: "+ preciototal +" pesos");


