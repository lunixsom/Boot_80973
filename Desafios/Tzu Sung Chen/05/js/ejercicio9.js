/*Escribe un programa que recorra un array de edades [18, 25, 14, 32, 16, 40] usando un 
bucle y clasifique cada edad como "Mayor de edad" o "Menor de edad". Imprime cada edad 
con su clasificación.*/

const edad = [18, 25, 14, 32, 16, 40]
let menorEdad = []
let mayorEdad = []

for ( i = 0 ; i < edad.length ; i++){
    if ( edad[i] >= 18 ){
        mayorEdad.push(edad[i])
        console.log(`${edad[i]} es mayor de edad`)
    } else {
        menorEdad.push(edad[i])
        console.log(`${edad[i]} es menor de edad`)
    }
}
console.log(menorEdad)
console.log(mayorEdad)