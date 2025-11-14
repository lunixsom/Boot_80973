//Crea un programa que use un bucle para generar un triángulo de asteriscos con la siguiente forma, donde el número de filas lo elija el usuario:

 let numeroFilas = parseInt(prompt("Ingrese el número de filas del triángulo."));

      //Evalución del número ingresado
      while(true){
      if(isNaN(numeroFilas) || numeroFilas < 3){
         alert(`Debe ingresar un número mayor o igual a 3`)
         break;
      }  
   

      console.log(`Se Inicia el triángulo con ${numeroFilas} filas`)

      //Si el número ingresado es válido, lo evalua y empieza la iteración para decrementar
      for(let i = numeroFilas; i >= 1; i--){

         //Imprime la cantidad de '*' hasta que sea igual al valor
         for(let j = 1; j <= i; j++){
            document.write('*');
         }
      
         document.write('<br>');
      }
      break;
   }






//  let asteriscos= "*";
 
//  let cuenta = numeroFilas;

//  while(cuenta > 0){
//    console.log(cuenta);

//    let j = cuenta;
   
//    while(j > 0){
//       console.log(j);
//       document.write('*');
//       j--;
//    }
//    cuenta--;
//    document.write('<br>');
//  }



