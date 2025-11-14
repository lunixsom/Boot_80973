// 12. Crea un programa que genere un número aleatorio entre 1 y 10. Luego usa un bucle para permitir al usuario adivinar el número. Si el usuario adivina correctamente, felicítalo y detén el bucle. Si no, indica si el número que ingresó es mayor o menor al número generado.

const random = Math.floor(Math.random() *10);
let numero=+prompt(`Escriba el numero que cree que es el correcto:`);
 while(true){
     if(numero===random){
        console.log(`Excelente adivino el numero el cual es: ${random}`);
         break;
     }else{
         if(random>numero){
            numero=+prompt(`El numero es mayor a ${numero}`);
         }else{
            numero=+prompt(`El numero es menor a ${numero}`);
         }
     }
 };
