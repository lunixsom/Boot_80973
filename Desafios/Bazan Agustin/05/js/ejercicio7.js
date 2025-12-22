 function ejercicio7() {
            console.log("EJERCICIO 7: SUMA ACUMULADA");
            
            let total = 0;
            let contador = 0;
            let output = "Números ingresados:\n\n";
            
            while (true) {
                let numero = parseInt(prompt(`Suma actual: ${total}\nIngresa un número:`));
                
                total += numero;
                contador++;
                
                console.log(`Número ${contador}: ${numero} | Total acumulado: ${total}`);
                output += `${numero} (Total: ${total})\n`;
                
                if (total >= 100) {
                    output += `\n✅ ¡Meta alcanzada! Total final: ${total}`;
                    console.log(`¡Meta alcanzada! Total final: ${total}`);
                    alert(`Total acumulado: ${total}`);
                    break;
                }
            }
            
            showOutput(7, output);
        }