//Usa un bucle para imprimir los números del 1 al 50. Si el número es divisible entre 3, imprime "Fizz". Si es divisible entre 5, imprime "Buzz". Si es divisible entre ambos, imprime "FizzBuzz".

let i = 1;


for(i; i <= 50; i++){//Recorre todos los numeros hasta el 50
    if(i % 3 === 0 && i % 5 === 0){//Comprueba las dos condiciones e imprime si es verdadera
        console.log('FizzBuzz');
    }else if(i % 3 === 0){//Comprueba una de las condiciones e imprime si es verdadera
        console.log('Fizz');
    }else if(i % 5 === 0){//Comprueba la condición restante e imprime si es verdadera
        console.log('Buzz');
    }else{
        console.log(i);
    }
}