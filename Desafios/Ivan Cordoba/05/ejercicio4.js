//Dado un array de números [23, 45, 12, 67, 34, 89, 21], escribe un programa que use un bucle para encontrar el número más grande. Usa condicionales para comparar los valores


const array = [23, 45, 12, 67, 34, 89, 21];



const encontrarMayor = (numeros) => {

    let mayor = numeros[0];
    
    for(let numero of numeros){
        
        if(numero > mayor){
        mayor = numero;
        
        }
    }
    return mayor;
  }

  console.log(encontrarMayor(array));

  