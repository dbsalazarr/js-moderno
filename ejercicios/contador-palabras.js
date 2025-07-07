/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

function cantidadPalabras( cadena ){
    let palabras = cadena.split(" ")
    return palabras
}

function separarPalabras( cadena ){
    
    let wordList = []
    let j = 0
    for (let i = 0; i < cadena.length; i++){
        if (cadena[i] == " "){
            wordList.push( cadena.substring(j, i) )
            j = i
        }
    }

    return wordList
}

console.log(separarPalabras("Hola tios hello"));

let cadena = "Yo creo que todo lo que existe no es que simplemente la manifestación de dios todo dios que existe"
cantidadPalabras(cadena )

console.log("buen dia".substring(0, 5));