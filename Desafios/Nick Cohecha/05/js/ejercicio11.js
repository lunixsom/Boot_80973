// 11. Escribe un programa que solicite al usuario una palabra y use un bucle para contar cuántas vocales tiene. Usa condicionales para verificar si cada letra es una vocal.
const vocales=["a","e","i","o","u","A","E","I","O","U"];
const palabra= prompt("Escriba a palabra que desea saber la cantidad de vovales");
let numVocales=0;
for(const letra of palabra){
    for(const vocal of vocales){
        if(vocal===letra){
            numVocales++;
        }
    }
}
console.log(`La palabra ${palabra} tiene ${numVocales} vocales`);