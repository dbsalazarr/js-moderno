// Supongamos que creamos un carrito de compras desde la consola, más adelante lo haremos ya desde una interfaz web.
const carrito = [];

// Añadir un elemento al carrito...
const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 1000
}

const producto2 = {
    nombre: 'Celular', 
    precio: 860
}

carrito.push(producto);
carrito.push(producto2);

console.log(carrito)
// Añadir al Inicio del carrito...

const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}
carrito.unshift(producto3);

// Existen otras formas más modernas de hacerlo... pero esta sintaxis aún se utiliza mucho asi que veamos como hacerlo en el proximo video

console.log(carrito);

// Obtener el total del carrito
let totalPagar = 0;
carrito.forEach((producto) => {
    totalPagar += producto.precio
})

console.log("El precio total a pagar es:" + totalPagar)