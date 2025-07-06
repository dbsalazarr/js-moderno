'use strict'
console.log("JS Vinculado")


const progreso = document.getElementById("barra-progreso")
let progresoActual = 0

const intervalo = setInterval( () => {

    progresoActual += 10
    progreso.value = progresoActual

    if( progresoActual >= progreso.max){
        clearInterval(intervalo)

        setTimeout( () => {
            console.log("Tarea finalizada")
            let parrafo = document.getElementById("parrafo")
            parrafo.innerText = "Tarea Finalizada"
            parrafo.style.display = "None"
        }, 200)
    }
}, 100)