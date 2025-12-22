function ejercicio10() {
            console.log("EJERCICIO 10: PALABRAS PALÍNDROMAS");
            
            let entrada = prompt("Ingresa palabras separadas por comas:");
            let palabras = entrada.split(",").map(p => p.trim().toLowerCase());
            
            let output = "Palabras ingresadas:\n" + palabras.join(", ") + "\n\nPalíndromas encontradas:\n\n";
            let palindromasEncontradas = [];
            
            for (let palabra of palabras) {
                let palabraInvertida = "";
                for (let i = palabra.length - 1; i >= 0; i--) {
                    palabraInvertida += palabra[i];
                }
                
                if (palabra === palabraInvertida) {
                    console.log(`✓ "${palabra}" es palíndroma`);
                    output += `✓ ${palabra}\n`;
                    palindromasEncontradas.push(palabra);
                }
            }
            
            if (palindromasEncontradas.length === 0) {
                output += "No se encontraron palíndromas";
            }
            
            showOutput(10, output);
        }