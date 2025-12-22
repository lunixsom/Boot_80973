function ejercicio8() {
            console.log("EJERCICIO 8: INVERTIR NÚMERO");
            
            let numero = prompt("Ingresa un número enterito positivo:");
            let output = `Número original: ${numero}\n\n`;
            
            let numeroInvertido = "";
            
            for (let i = numero.length - 1; i >= 0; i--) {
                numeroInvertido += numero[i];
            }
            
            console.log(`Número original: ${numero}`);
            console.log(`Número invertido: ${numeroInvertido}`);
            
            output += `Número invertido: ${numeroInvertido}`;
            alert(`${numero} invertido es: ${numeroInvertido}`);
            
            showOutput(8, output);
        }