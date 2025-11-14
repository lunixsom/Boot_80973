// 10. Crea un programa que solicite al usuario una lista de palabras separadas por comas. Usa un bucle para verificar cuáles de esas palabras son palíndromas y muéstralas. Una palabra es palíndroma si se lee igual al derecho y al revés.
const listado=prompt("Escriba el listado de palabras para saber si son palindromas (separelas unicamente con coma)");
let comas=[];
for(let coma=0; coma<listado.length;coma++){
    if(listado[coma]==","){
        comas.push(coma);
    }
}
let listadoOrdenado=[];
let indice=0;
let aux1=0;
let aux2=0;
while(indice<comas.length){
    //palabra1
    //012345678
    aux2=comas[indice];
    listadoOrdenado.push(listado.slice(aux1,aux2));
    //console.log(`indice= ${indice}, axu1=${aux1}, axu2=${aux2}`);
    aux1=comas[indice]+1;
    indice++;
};
listadoOrdenado.push(listado.slice(aux1,listado.length));
for(const palabra of listadoOrdenado){
    aux1=0;
    aux2=palabra.length-1;
    let igualdad=true;
    while(aux1<palabra.length){
        if(palabra[aux1]!==palabra[aux2]){
            igualdad=false;
        }
        aux1++;
        aux2--;
    }
    if(igualdad===true){
        console.log(`La palabra ${palabra} es palíndroma`);
    }
    
}