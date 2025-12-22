
        function ejercicio1() {
            
            let nombre = prompt("¿Cuál es tu nombre?");
            alert(`Hola, ${nombre}, ¡Bienvenido al Bootcamp!`);
            console.log("=== EJERCICIO 1 ===");
            console.log(`Hola, ${nombre}, ¡Bienvenido al Bootcamp!`);
        }


        function ejercicio2() {
           
            let base = parseFloat(prompt("Ingresa la base del rectángulo:"));
            let altura = parseFloat(prompt("Ingresa la altura del rectángulo:"));
            let area = base * altura;
            console.log("=== EJERCICIO 2 ===");
            console.log(`Base: ${base}, Altura: ${altura}`);
            console.log(`El área del rectángulo es: ${area}`);
        }

        function ejercicio3() {
            let numero = parseInt(prompt("Ingresa un número:"));
            
            if (numero % 2 === 0) {
                alert(`El número ${numero} es PAR`);
            } 
            else {
                alert(`El número ${numero} es IMPAR`);
            }
            
            console.log("=== EJERCICIO 3 ===");
            console.log(`Número ingresado: ${numero}`);
        }


        function ejercicio4() {
            let color = "azul";
            let comida = "pizza";
            let lugar = "Japón";
            let frase = `Mi color favorito es ${color}, me encanta comer ${comida} y quiero visitar ${lugar}.`;
            console.log("=== EJERCICIO 4 ===");
            console.log(frase);
            alert(frase);
        }

        function ejercicio5() {
            let num1 = parseFloat(prompt("Ingresa el primer número:"));
            let num2 = parseFloat(prompt("Ingresa el segundo número:"));
            let num3 = parseFloat(prompt("Ingresa el tercer número:"));
            let promedio = (num1 + num2 + num3) / 3;
            console.log("=== EJERCICIO 5 ===");
            console.log(`Números: ${num1}, ${num2}, ${num3}`);
            console.log(`El promedio es: ${promedio.toFixed(2)}`);
        }

        function ejercicio6() {
            let radio = parseFloat(prompt("Ingresa el radio del círculo:"));
            
            let perimetro = 2 * Math.PI * radio;
            let area = Math.PI * radio * radio;   
            console.log("=== EJERCICIO 6 ===");
            console.log(`Radio: ${radio}`);
            console.log(`Perímetro: ${perimetro.toFixed(2)}`);
            console.log(`Área: ${area.toFixed(2)}`);
        }

        function ejercicio7() {
            let minutos = parseFloat(prompt("Ingresa la cantidad de minutos:"));

            let segundos = minutos * 60;
            let horas = minutos / 60;  
            console.log("=== EJERCICIO 7 ===");
            console.log(`${minutos} minutos equivalen a:`);
            console.log(`- ${segundos} segundos`);
            console.log(`- ${horas.toFixed(2)} horas`);
        }

        function ejercicio8() {
            let precioDolares = parseFloat(prompt("Ingresa el precio del producto en dólares:"));
            const DOLAR = 1530;
            const IVA = 0.21;
            const GANANCIA = 0.30;
            let precioPesos = precioDolares * DOLAR;
            let montoIVA = precioPesos * IVA;
            let precioConIVA = precioPesos + montoIVA;
            let montoGanancia = precioConIVA * GANANCIA;
            let precioFinal = precioConIVA + montoGanancia;
            
            console.log("=== EJERCICIO 8 ===");
            console.log(`Precio original: $${precioDolares} USD`);
            console.log(`Precio en pesos: $${precioPesos.toFixed(2)}`);
            console.log(`IVA (21%): $${montoIVA.toFixed(2)}`);
            console.log(`Ganancia (30%): $${montoGanancia.toFixed(2)}`);
            console.log(`PRECIO FINAL: $${precioFinal.toFixed(2)}`);
            
            alert(`El precio final del producto es: $${precioFinal.toFixed(2)} pesos`);
        }

        function ejercicio9() {
            let num1 = parseFloat(prompt("Ingresa el primer número:"));
            let operacion = prompt("Ingresa la operación (+, -, *, /):");
            let num2 = parseFloat(prompt("Ingresa el segundo número:"));
            
            let resultado;
            switch(operacion) {
                case "+":
                    resultado = num1 + num2;
                    break;
                case "-":
                    resultado = num1 - num2;
                    break;
                case "*":
                    resultado = num1 * num2;
                    break;
                case "/":
                    if (num2 === 0) {
                        alert("Error: No se puede dividir por cero");
                        return;
                    }
                    resultado = num1 / num2;
                    break;
                default:
                    alert("Operación no válida. Usa +, -, * o /");
                    return;
            }
            
            console.log("=== EJERCICIO 9 ===");
            console.log(`${num1} ${operacion} ${num2} = ${resultado}`);
            alert(`Resultado: ${num1} ${operacion} ${num2} = ${resultado}`);
        }

        function ejercicio10() {
            // Objeto: estructura que agrupa propiedades relacionadas
            const auto = {
                marca: "Renaul 12",
                modelo: "F600",
                año: 1990,
                color: "Marron",
                velocidadMaxima: 340,
                motor: "V8 Twin-Turbo",
                precio: 280000,
                combustible: "Gasolina"
            };
            
            console.log("=== EJERCICIO 10 ===");
            console.log("Objeto Auto completo:", auto);
            console.log(`Marca: ${auto.marca}`);
            console.log(`Modelo: ${auto.modelo}`);
            console.log(`Velocidad Máxima: ${auto.velocidadMaxima} km/h`);

            const mensaje = `El auto ${auto.marca} ${auto.modelo} es uno de los autos más potentes en el mercado alcanzando una velocidad de ${auto.velocidadMaxima} km/h!`;
            
            document.getElementById('auto-info').innerHTML = mensaje;
            alert(mensaje);
        }

        function ejercicio11() {
            let listaDeCompras = [
                "Leche",
                "Pan",
                "Huevos",
                "Manzanas",
                "Arroz",
                "Pollo",
                "Coca-Cola"
            ];
            
            console.log("=== EJERCICIO 11 ===");
            console.log("Lista original:");
            listaDeCompras.forEach((producto, index) => {
                console.log(`${index}: ${producto}`);
            });
            
            listaDeCompras.push("Fernet");
            console.log("\nDespués de agregar 'Café':");
            console.log(listaDeCompras);
            
            listaDeCompras[2] = "Manteca";
            console.log("\nDespués de reemplazar el índice 2:");
            console.log(listaDeCompras);
        }

        function ejercicio12() {
            let miListaDePendientes = [
                "Inception 4",
                "Interstellar",
                "The Matrix",
                "Stranger Things"
            ];
            
            console.log("=== EJERCICIO 12 ===");
            console.log("Lista inicial:");
            console.log(miListaDePendientes);
            
   
            let nuevaPelicula = prompt("Ingresa una nueva película para ver:");
            miListaDePendientes.push(nuevaPelicula);
            
            console.log("\nDespués de agregar nueva película:");
            console.log(miListaDePendientes);
            
            miListaDePendientes[3] = "Avengers: Era de Ultron";
            
            console.log("\nDespués de modificar la 4ta película:");
            console.log(miListaDePendientes);
            alert(`Lista actualizada:\n${miListaDePendientes.join('\n')}`);
        }