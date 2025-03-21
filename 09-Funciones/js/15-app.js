const comprar = () => {
    console.log("Comprando")
}
// Un solo parámetro
const saludar = saludo => { console.log("Hola este es el saludo, " + saludo) }

// varios parámetros
const saludar2 = (saludo, nombre) => { console.log(`${nombre} y el saludo es: ${saludo}`) }

// cuando es una sola línea no requiere llaves, return 
const isLogueado = () => true
const mostrarLinea = (param1 = 'hola') => console.log("Muestra la línea " + param1)


comprar()
saludar("Buen día")
saludar2("les desea un buen día", "Bremdow")

if (isLogueado){
    console.log("Esta logueado")
}else{
    console.log("No esta logueado")
}

mostrarLinea()