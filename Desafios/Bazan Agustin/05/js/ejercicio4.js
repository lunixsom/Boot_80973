function ejercicio4() {
            console.log("EJERCICIO 4: NÚMERO MÁS GRANDE");
            
            const numeros = [23, 45, 12, 67, 34, 89, 21];
            let output = "Array: " + numeros.join(", ") + "\n\n";
            
            let mayor = numeros[0];
            
            for (let i = 1; i < numeros.length; i++) {
                if (numeros[i] > mayor) {
                    mayor = numeros[i];
                }
            }
            
            console.log(`El número más grande es: ${mayor}`);
            output += `El número más grande es: ${mayor}`;
            
            showOutput(4, output);
        }