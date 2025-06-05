telegrama = " Llego. mañana alrededor del mediodía. Voy a almorzar. milaneza. hla"
telegrama = telegrama.trim()

console.log(telegrama)
palabras = telegrama.split(" ");

// Recorrer cada palabra
palabrasCortas = 0
palabrasLargas = 0
console.log(palabras)
telegramaModificado = palabras.map( (word, posicion) => {

    if(posicion == palabras.length - 1){
        if(word.includes(".")){
            if (word.length > 6){
                palabrasLargas++
                return word.slice(0,5) + "@ STOP STOP"
            }else{
                palabrasCortas++
                return word.replace(".", " STOP STOP")
            }
        }else{
            if (word.length > 5){
                palabrasLargas++
                return word.slice(0,5) + "@ STOP STOP"
            }else{
                palabrasCortas++
                return word + " STOP STOP"
            }
        }
    }else if(word.includes(".")){

        if (word.length > 6){
            palabrasLargas++
            return word.slice(0,5) + "@ STOP"
        }else{
            palabrasCortas++
            return word.replace(".", "STOP")
        }
    }else{
        if(word.length > 5){
            palabrasLargas++
            return word.slice(0, 5) + "@"
        }else{
            palabrasCortas++
            return word
        }
    }

})
console.log(telegramaModificado)

mensajeModificado = ""
telegramaModificado.forEach( word => {
    mensajeModificado += word + " "
})

console.log(mensajeModificado.trim())

console.log("Palabras Cortas ",palabrasCortas)
console.log("Palabras Largas ", palabrasLargas)


// T: 2
// E: 2.5
// Ex: 3.5
// A: 1


