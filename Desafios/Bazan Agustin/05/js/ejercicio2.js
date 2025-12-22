        function ejercicio2() {
            console.log("EJERCICIO 2: NÚMEROS PARES DEL 1 AL 50");
            
            let output = "Números pares del 1 al 50:\n\n";
            
            for (let i = 1; i <= 50; i++) {
                
                if (i % 2 === 0) {
                    console.log(i);
                    output += i + " ";
                }
            }
            
            showOutput(2, output);
        }