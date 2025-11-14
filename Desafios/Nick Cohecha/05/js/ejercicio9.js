// 9. Escribe un programa que recorra un array de edades [18, 25, 14, 32, 16, 40] usando un bucle y clasifique cada edad como "Mayor de edad" o "Menor de edad". Imprime cada edad con su clasificación.

const edades=[18, 25, 14, 32, 16, 40];
for(const edad of edades){
    if(edad>=18){
        console.log(`La edad ${edad} es mayor de edad.`)
    }else{
        console.log(`La edad ${edad} es menor de edad.`)
    };
}