telegrama = " Llego mañana alrededor del mediodía. Voy a almorzar "
telegrama = telegrama.trim()

console.log(telegrama)
palabras = telegrama.split(" ");

// Recorrer cada palabra
palabrasCortas = 0
palabrasLargas = 0

telegramaModificado = palabras.map( word => {
    
    if (word.length > 5){
        palabrasLargas++
        if (word.includes(".")){
            return word.slice(0,5) + "@ STOP"
        }else{
            return word.slice(0, 5) + "@"
        }
    }else{
        palabrasCortas++
        return word
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


