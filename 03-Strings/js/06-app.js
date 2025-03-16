// Repeat Te va a permitir repetir una cadena de texto:

const producto = 'Monitor 24 pulgadas ';
const texto = 'Promoción '.repeat(3)
console.log(producto.repeat(2));
console.log(producto.repeat(2.1)); // va a redondear a entero

console.log(`${producto} en ${texto} !!!`);
 


// Split
// Retorna un arreglo con items en función del separador designado
const actividad = 'Estoy aprendiendo Javascript Moderno';
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));


const frutas = 'Manzana - Pera - Fresa - Jamaica - Zanahoria';
console.log(frutas.split("-"))
