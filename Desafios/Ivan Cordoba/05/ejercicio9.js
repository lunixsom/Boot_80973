//Escribe un programa que recorra un array de edades [18, 25, 14, 32, 16, 40] usando un bucle y clasifique cada edad como "Mayor de edad" o "Menor de edad". Imprime cada edad con su clasificación.

const edades = [18, 25, 14, 32, 16, 40];

for(let i = 0; i < edades.length; i++){
    if(edades[i] >= 18){
        console.log(`Es Mayor de edad ${edades[i]}`);
    }else{
        console.log(`Es menor de edad ${edades[i]}`);
    }
}

//Probe las dos opciones como para ir tratando de poner en practica, ya que es la primera vez que veo lógica y la verdad me esta costando mucho

for(let edad of edades){
    if(edad >= 18){
        console.log(`Es Mayor de edad ${edad}`);
    }else{
        console.log(`Es menor de edad ${edad}`);
}
}