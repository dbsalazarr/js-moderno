// En el video anterior videos el for of ,en este video veremos el for in...

// el for in va a iterar sobretodas las propiedades de un objeto, pero primero veamos como recorrer un arreglo con objetos...

const carrito = [
    {id: 1, producto: 'Libro' },
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Disco'}
];

for (let producto of carrito) {
    console.log(producto.producto);
}

console.log("// ======== Iterar Objetos ======== //")

let automovil = {
    modelo: 'Camaro',
    motor: '4.8',
    anio: '1900',
    marca: 'Chevrolet'
}

// Iterando el objeto automovil
for(let keys in automovil){
    console.log(`${keys} : ${automovil[keys]}`)
}



console.log("Others probe")






for(let auto in automovil) {
    console.log(`${auto} : ${automovil[auto]}`);
}

console.log("// ======== Iterar Object.entries ======== //")

for(let [llave, valor] of Object.entries(automovil)){
    console.log(automovil[llave])
}


// Y con eso terminamos lo que son los iteradores, veamos una serie de Array Methods, que son similares a estos iteradores y sus usos. ya vamos terminando toda la parte de básicos de JavaScript para movernos al DOM pero vamos viendo un tema más!