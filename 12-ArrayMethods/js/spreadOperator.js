const { log } = require("node-red");

const values = [1, 2, 3]
let numeros = [0, ...values, 4]

// Arreglo original
console.log(values);

// Arreglo 
console.log(numeros)


const person = {
	nombre: "Karlos",
	edad: 19
}

let otherProperties = {
  ...person,
  ocupacion: "Estudiante",
	estadoCivil: "Casado"
}


console.log(otherProperties)

let saludo = "Hola Mundo"
const charArray = [...saludo]

console.log(charArray) // [H, o, l, a, , M, u, n, d, o]


const carrito = [
    { producto: 'Monitor 20 Pulgadas', precio: 500},
    { producto: 'Televisión 50 Pulgadas', precio: 700},
    { producto: 'Tablet', precio: 300}
];

item = {producto: 'Audifonos', precio: 5000}

// Agregando al spread operator
let carritoModificado = [...carrito, item]

console.log(carritoModificado)


function add(a, b, c){
	return a + b + c
}

const parametros = [1, 2, 3]

console.log( add( ...parametros ) )

// Objetos

const celular = {
    marca: "Samsung", 
    modelo: "A34",
    ram: "8Gb"
}

let {modelo, marca, ram} = celular

console.log(marca)
console.log(modelo)
console.log(ram)

// Cada parámetro en una sola variable

const bicicleta = {
	color: "Rojo",
	tipo: "Montañera",
	cambios: 21
}

let { color: pColor, tipo : pTipo, cambios: pCambios} = bicicleta

console.log(pColor);
console.log(pTipo);
console.log(pCambios);


function saludar({nombre, edad, direccion}){
	return `Hola soy ${nombre} y tengo ${edad} y vivo en ${direccion}`
}

const user = {
	nombre: "Bremdow",
	edad: 18,
	direccion: "Av. The Macizos Mz 69 Lt 2"
}

console.log( saludar(user) )