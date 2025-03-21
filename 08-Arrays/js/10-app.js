const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

// Muy similar al forEach existe un array metod llamado map, la diferencia es que map te crea un array nuevo...
const nombreProducto = carrito.map( producto => producto.nombre)


const nuevoArray = carrito.map( producto => producto.precio)


// Multiplicar el precio de los productos por 2
const precioDuplicado = carrito.map( (producto) => {
    return producto.precio * 2
})

console.log("Nombre Productos")
console.log(nombreProducto)
console.log("Precio elementos")
console.log(nuevoArray);
console.log("Precio duplicado")
console.log(precioDuplicado)