function ejercicio11() {
            console.log("EJERCICIO 11: CONTADOR DE VOCALES");
            
            let palabra = prompt("Ingresa una palabra:").toLowerCase();
            const vocales = ['a', 'e', 'i', 'o', 'u'];
            let contador = 0;
            let output = `Palabra: "${palabra}"\n\nVocales encontradas:\n\n`;
            
            for (let i = 0; i < palabra.length; i++) {
                let letra = palabra[i];
                
                if (vocales.includes(letra)) {
                    contador++;
                    console.log(`Posición ${i}: ${letra}`);
                    output += `${letra} `;
                }
            }
            
            console.log(`Total de vocales: ${contador}`);
            output += `\n\n Total de vocales: ${contador}`;
            
            showOutput(11, output);
        }