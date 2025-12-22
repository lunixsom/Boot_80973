const edades = [18, 25, 14, 32, 16, 40];

for (let i = 0; i < edades.length; i++) {
  const edad = edades[i];
  if (edad >= 18) {
    console.log(`${edad}: Mayor de edad`);
  } else {
    console.log(`${edad}: Menor de edad`);
  }
}
