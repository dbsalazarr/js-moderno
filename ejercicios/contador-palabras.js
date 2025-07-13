/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

function separarPalabras( cadena ){
    cadena = cadena.toLowerCase()
    let wordList = []
    let j = 0
    for (let i = 0; i < cadena.length; i++){
        if (cadena[i] == " "){
            wordList.push( cadena.substring(j, i) )
            j = i + 1
        }
        if( i == cadena.length - 1){
            wordList.push( cadena.substring(j, cadena.length) )
        }
    }
    return wordList
}

// console.log(separarPalabras("hola tios hola tios"))

// let cadena = "Yo creo que TODO lo que existe no es mas que simplemente la manifestación de dios todo dios que existe"
let cadena = "buenos buenos dias y dias en las noches"

let palabras = separarPalabras(cadena)
console.log(palabras)

// Verificar la existencia de una palabra
function existsWord( words, cadena ){
    let exist = false
    for(let i = 0; i < words.length; i++){
        if (words[i] == cadena){
            exist = true
            break
        } 
    }
    return exist
}

console.log( existsWord(palabras, "dias"));


function contadorPalabra( wordList, word ){
    let amount = 0
    wordList.forEach( item => {
        if ( item == word)
            amount++
    })
    return amount
}

console.log(contadorPalabra( palabras, "y"));

function contarPalabras( phrase ){
    let listWords = separarPalabras(phrase) 
    let palabras = []
    let cantidadPalabras = []
    
    listWords.forEach( item => {
        if( !existsWord(palabras, item) ){
            palabras.push(item)
            cantidadPalabras.push( [item, contadorPalabra(listWords, item)] )
        }
    })
    return cantidadPalabras
}
console.log("Conteo palabras");
console.log( contarPalabras(cadena) );