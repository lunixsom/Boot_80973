/*Escribe un programa que use un bucle para pedir al usuario números enteros. Suma esos números y detén el bucle cuando el acumulado sea mayor o igual a 100. Muestra el total acumulado.*/

let suma = 0;
let Ingresonumero;

while (suma < 100){
    let Numentero=prompt("Digite un numero entero");
    Ingresonumero = parseInt (Numentero);

    if (Numentero===null){
         alert ("Se ha cancelado la operacion")
         break
    }

     if (isNaN(Ingresonumero)){
         alert ("Ingrese un numero entero valido")
         continue;
    }

    suma +=Ingresonumero;

     if (suma >= 100){
        alert ("El acumulado es igual o superior a 100")
        break;
     }

}

alert(`El total acumulado es ${suma}`)
