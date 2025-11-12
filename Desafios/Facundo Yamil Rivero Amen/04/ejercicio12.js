let miListaDePendientes = 
[ "the Chosen" , "vikings" , "The Witcher" , "Stranger Things"]

let usuarioSeleccion = prompt ("Ingrese la serie que desee")

miListaDePendientes.push (usuarioSeleccion)  // aca elegi shrek, pero no tiene sentido que no pueda hacerlo automaticamente, osea elegir la nueva opcion y remplazar la 4 opcion de mi lista osea la numero 3 porque contabiliza el 0 como unidad el array 

miListaDePendientes[3] = "shrek"

console.log (miListaDePendientes)