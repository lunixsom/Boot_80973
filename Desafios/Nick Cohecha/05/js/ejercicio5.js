// 5. Crea un programa que use un bucle para generar un triángulo de asteriscos con la siguiente forma, donde el número de filas lo elija el usuario:

const dunFilas=+prompt("Escriba el numero de filas de su triangulo");
let fila=dunFilas;
while(fila>0){
    let asteriscos="*";
    let columna=1;
    while(columna<fila){
        asteriscos=asteriscos+"*";
        columna=columna+1;
    }
    console.log(asteriscos);
    fila=fila-1;
}
