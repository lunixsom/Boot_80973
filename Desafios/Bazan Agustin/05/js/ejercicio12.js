function ejercicio12() {
            console.log("EJERCICIO 12: ADIVINA EL NÚMERO");
            
            const numeroSecreto = Math.floor(Math.random() * 10) + 1;
            let intentos = 0;
            let output = "Juego: Adivina el número (1-10)\n\n";
            
            console.log("Número secreto generado (no mires): " + numeroSecreto);
            
            while (true) {
                intentos++;
                let intento = parseInt(prompt(`Intento #${intentos}\n¿Qué número estoy pensando? (1-10)`));
                
                if (intento === numeroSecreto) {
                    output += `Intento ${intentos}: ${intento} ✅\n\n`;
                    output += ` ¡Correctirijillo! Lo adivinaste en ${intentos} intentos`;
                    console.log(`¡Felicidades! Adivinaste en ${intentos} intentos`);
                    alert(` ¡Correcto crack! Era el ${numeroSecreto}\nLo lograste en ${intentos} intentirijillos`);
                    break;
                } else if (intento > numeroSecreto) {
                    output += `Intento ${intentos}: ${intento} → Muy alto \n`;
                    console.log(`${intento} es muy alto`);
                    alert("Muy alto. Intenta con un número menor");
                } else {
                    output += `Intento ${intentos}: ${intento} → Muy bajo ⬆️\n`;
                    console.log(`${intento} es muy bajo`);
                    alert(" Muy bajo. Intenta con un número mayor");
                }
            }
            
            showOutput(12, output);
        }