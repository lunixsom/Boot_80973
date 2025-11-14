// 6. Usa un bucle para imprimir los números del 1 al 50. Si el número es divisible entre 3, imprime "Fizz". Si es divisible entre 5, imprime "Buzz". Si es divisible entre ambos, imprime "FizzBuzz".
for(let i=0;i<=50;i++){
    let div3=false;
    let div5=false;
    if(i%3==0){
        div3=true;
    };
    if(i%5==0){
        div5=true;
    };
    if(div3==true && div5==true){
        console.log(`El numero ${i} es FizzBuzz`)
    }else if(div3==true){
        console.log(`El numero ${i} es Fizz`)
    }else if(div5==true){
        console.log(`El numero ${i} es Buzz`)
    }

}