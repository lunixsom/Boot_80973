/*Crea un programa que genere un número aleatorio entre 1 y 10. Luego usa un bucle para permitir al usuario adivinar el número. Si el usuario adivina correctamente, felicítalo y detén el bucle. Si no, indica si el número que ingresó es mayor o menor al número generado.*/

alert("Adivina un numero aleatorio entre 1 y 10"); 

while (true){

let Numaleatorio = Math.floor(Math.random() * 10 + 1);
let entrada = prompt("Digite un numero entre 1 y 10");

if ((entrada !== Numaleatorio) && (entrada < Numaleatorio)){
alert(`${entrada} es menor al numero '${Numaleatorio}' generado, sigue intentando`);

}

else if((entrada !== Numaleatorio) && (entrada > Numaleatorio)){
alert(`${entrada} es mayor al numero '${Numaleatorio}' generado, sigue intentando`);

}

if (entrada == Numaleatorio){
alert(`Haz adivinado, ${entrada} es el numero correcto. ¡FELICITACIONES!`);
break
}
}
