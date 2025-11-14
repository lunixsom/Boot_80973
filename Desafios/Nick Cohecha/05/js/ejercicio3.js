// 3. Crea un programa que pida al usuario un número del 1 al 100 y use un bucle para imprimir la tabla de multiplicar de ese número. Si la multiplicación da como resultado un número mayor a 1000, detén el bucle.
let numero;
do{
    numero=+prompt("Escriba un numero del 1 al 100");
}while(1>numero || numero>100);

let i=0;
let resultado=0;
while(true){
    resultado=i*numero;
    if(resultado<1000){
        console.log(`${numero} X ${i}=${resultado}`)
    }else{
        break;
    }
    i++;
};
console.log(`El resultado es mayor a 1000`)