        function showOutput(id, text) {
            const output = document.getElementById(`output${id}`);
            output.innerHTML = text;
            output.classList.add('show');
        }

        function ejercicio1() {
            console.log("EJERCICIO 1: NÚMEROS POSITIVOS");
            
            const numeros = [12, -5, 7, -3, 9, -8, 15, 3, -25, 40, -33, -9];
            let output = "Array original: " + numeros.join(", ") + "\n\nNúmeros positivos:\n";
            
            for (let numero of numeros) {
                if (numero > 0) {
                    console.log(numero);
                    output += numero + " ";
                }
            }
            
            showOutput(1, output);
        }