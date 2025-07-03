'use strict'
let formVolumen = document.getElementById("calculadora")
let txtRadio = document.querySelector("#radio")
let txtVolumen = document.querySelector("#volumen")
let btnCalcularVolumen = document.getElementById("btn-volumen")


btnCalcularVolumen.addEventListener("click", (e) => {    
    e.preventDefault()
    txtVolumen.value = (4*Math.PI/3)*txtRadio.value**3
})