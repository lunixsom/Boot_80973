function ejercicio5() {
            console.log("EJERCICIO 5: TRIÁNGULO INVERTIDO");
            
            let filas = parseInt(prompt("¿Cuántas filas quieres para el triángulo?"));
            let output = "Triángulo invertido:\n\n";
            
            for (let i = filas; i >= 1; i--) {
                let linea = "";
                
                for (let j = 1; j <= i; j++) {
                    linea += "*";
                }
                
                console.log(linea);
                output += linea + "\n";
            }
            
            showOutput(5, output);
        }