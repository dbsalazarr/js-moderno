// En este video estaremos viendo la palabra this...
// This se refiere al valor sobre el objeto o context que se esta ejecutando en ese momento


// Aún no hemos visto las funciones, pero lo haremos en los próximos capitulos...

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El Producto: ${this.nombre}  tiene un precio de ${this.precio}`)
    }
}


function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("Laptop", 7500)
console.log(producto2)

const producto3 = new Producto("Server", 4000)
console.log(producto3)

console.log(producto.mostrarInfo() );