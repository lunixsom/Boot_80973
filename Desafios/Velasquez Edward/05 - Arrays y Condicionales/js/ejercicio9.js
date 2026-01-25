/*Escribe un programa que recorra un array de edades [18, 25, 14, 32, 16, 40] usando un bucle y clasifique cada edad como "Mayor de edad" o "Menor de edad". Imprime cada edad con su clasificación.*/

const edades = [18, 25, 14, 32, 16, 40];

console.log ("Los Menores de edad son:")
for (let i=0; i<6; i++){
    if (edades[i] < 18){
    console.log (edades[i]+ " años")
}
}

console.log ("Los Mayores de edad son:")
for (let i=0; i<6; i++){
    if (edades[i] >= 18){
    console.log (edades[i]+ " años")
    }
}
