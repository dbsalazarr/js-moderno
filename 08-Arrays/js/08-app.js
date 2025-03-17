// Array Destructuring - Al igual que los objetos algunas veces quieres crear la variable y el valor del arreglo, veamos algunos ejemplos:


const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const [primero, ,segundo, tercero, ...resto ] = numeros;


// console.log(numeros);
console.log(primero);
console.log(segundo);
console.log(tercero);
console.log(...resto)

console.log(resto.length)
console.log(typeof resto)
console.log(typeof numeros)

// Si quieres saltarte un valor, pon una coma....

// ahora, como extraes todos los otros valores, digamos que solo quieres crear la primer variable, mantener el arreglo original..

// const [primero, , segundo, ...tercero ] = numeros;