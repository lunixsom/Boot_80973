function ejercicio9() {
            console.log("EJERCICIO 9: CLASIFICAR EDADES");
            
            const edades = [18, 25, 14, 32, 16, 40];
            let output = "Clasificación de edades:\n\n";
            
            for (let edad of edades) {
                let clasificacion;
                
                if (edad >= 18) {
                    clasificacion = "Mayor de edad";
                } else {
                    clasificacion = "Menor de edad";
                }
                
                console.log(`${edad} años: ${clasificacion}`);
                output += `${edad} años → ${clasificacion}\n`;
            }
            
            showOutput(9, output);
        }