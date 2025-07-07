/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function invertirCadena( cadena ) {
    let newCadena = ""
    for(let i = cadena.length - 1; i >= 0; i--){
        newCadena += cadena[i]
    }
    return newCadena
}
let saludo = "ana"
console.log(saludo)
let cadenaInvertida = invertirCadena(saludo)
let anagrama = cadenaInvertida == saludo ? true : false 
console.log(anagrama);