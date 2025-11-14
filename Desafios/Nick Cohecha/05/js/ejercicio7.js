// 7. Escribe un programa que use un bucle para pedir al usuario números enteros. Suma esos números y detén el bucle cuando el acumulado sea mayor o igual a 100. Muestra el total acumulado.
let suma=0;
while(suma<100){
    const numero=+prompt("Escriba numero para sumar");
    suma=suma+numero;
    console.log(`El total acumulado es  ${suma} al haber sumado ${numero}`)
}