  function ejercicio3() {
            console.log("EJERCICIO 3: TABLA DE MULTIPLICAR");
            
            let numero = parseInt(prompt("Ingresa un número del 1 al 100:"));
            let output = `Tabla de multiplicar del ${numero}:\n\n`;
            
            for (let i = 1; i <= 100; i++) {
                let resultado = numero * i;
                
                if (resultado > 1000) {
                    output += `\n Detenido: ${numero} × ${i} = ${resultado} (supera 1000)`;
                    console.log(`Detenido en ${numero} × ${i} = ${resultado}`);
                    break;
                }
                
                console.log(`${numero} × ${i} = ${resultado}`);
                output += `${numero} × ${i} = ${resultado}\n`;
            }
            
            showOutput(3, output);
        }