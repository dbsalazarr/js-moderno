// Veamos como hacer destructuring de un objeto que esta dentro de otro objeto..

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    informacion : {
        medidas:{
            peso: '1kg',
            medida: '1m'
        },
        fabricante:{
            pais: 'Perú'
        }
    }
}


// const { nombre, precio, informacion, informacion: { medidas }, informacion:{fabricante} } = producto;
// console.log(nombre)
// console.log(precio)
// console.log(informacion)
// console.log(medidas)
// console.log(fabricante.pais)

const { informacion:{ medidas, medidas:{ peso } } } = producto;

console.log(peso)
console.log(medidas)