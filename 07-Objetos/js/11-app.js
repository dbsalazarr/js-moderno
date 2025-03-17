const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        //return `El Producto: ${this.nombre}  tiene un precio de ${this.precio}`;
        console.log(`El Producto: ${this.nombre} tiene un precio de ${this.precio}`)
    }
}

producto.mostrarInfo()