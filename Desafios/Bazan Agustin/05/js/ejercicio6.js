function ejercicio6() {
            console.log("EJERCICIO 6: FIZZBUZZ");
            
            let output = "FizzBuzz del 1 al 50:\n\n";
            
            for (let i = 1; i <= 50; i++) {
                if (i % 3 === 0 && i % 5 === 0) {
                    console.log("FizzBuzz");
                    output += "FizzBuzz ";
                } 
                else if (i % 3 === 0) {
                    console.log("Fizz");
                    output += "Fizz ";
                } 
                else if (i % 5 === 0) {
                    console.log("Buzz");
                    output += "Buzz ";
                } 
                else {
                    console.log(i);
                    output += i + " ";
                }
            }
            
            showOutput(6, output);
        }