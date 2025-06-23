// En este video estaremos viendo every...

// Every es raro, ya que todos los elementos del arreglo deberán cumplir esa condición..
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 70},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 101},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

// con un foreach seria algo asi...
let cumple = true;
carrito.forEach( producto => {
    if(producto.precio > 700) {
        cumple = false;
        return
    }
})
console.log(cumple);



const resultado = carrito.every(producto => {
    return producto.precio < 1000
}); // Mil se cumple, 700 no...
console.log(resultado);


let todosmayor100 = carrito.every( item => {
	return item.precio > 100
})

console.log(todosmayor100); // True : todos los elemento sean mayor a 100