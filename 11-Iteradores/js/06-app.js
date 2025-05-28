// Bueno veamos otros iteradores que existen en JavaScript, previamente ya habiamos visto forEach y Map, vamos a verlos en este video y sus diferencias...

let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

// Recorrer por un Foreach
pendientes.forEach( (pendiente, index) =>  {
    console.log(`${index} : ${pendiente}`);
});

let tareasDia = ["Variables en C++", "Iteradores Js", "Demodulador AM", "VHDL", "Resumen Funda de Bio", "Resumen L3", "Resumen de Control Industrial"]
tareasDia.forEach( (tarea, indice) => {
    console.log(indice, tarea)
})
// Recuerda que como es una sola linea, la llave es opcional...

// Recorrer arreglo de objetos
const carrito = [
    {id: 1, producto: 'Libro' },
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Disco'}
];

carrito.forEach( producto =>  {
    console.log(`Agregaste ${producto.producto}`);
});

// Lo mismo aplica para los maps, la sintaxis es la misma, solo recuerda, el map te crea un nuevo arreglo, si solo deseas recorrer los elementos utiliza el Foreach, si requieres crear un nuevo arreglo, sin duda el map sera mejor...

// agrega cada tarea de indice par el texto -> Completada

tareasCompletadas = tareasDia.map((tarea, index) => {
    if((index + 1)% 2 == 0){
        return tarea + " Completada"
    }else{
        return tarea
    }
})

console.log(" // =========== LISTA DE TAREAS COMPLETADAS ========= //")
tareasCompletadas.forEach( tarea => {
    console.log(tarea)
})