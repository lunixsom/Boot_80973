// 8. Pide al usuario un número entero positivo y usa un bucle para invertirlo. Por ejemplo, si el usuario ingresa 12345, el programa debe devolver 54321.

numero=prompt("Escribe un numero para invertir");
arreglo=[];
for(const unidad of numero){
    arreglo.push(unidad);
};
let indice= arreglo.length-1;
let aux="";
while(indice>=0){
    aux=aux+arreglo[indice];
    indice=indice-1;
}
console.log(aux)