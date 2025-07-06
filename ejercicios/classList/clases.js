'use strict'

let seccion = document.querySelector(".center")
let btnSize = document.getElementById("btn-size")

btnSize.addEventListener("click", () => {
    // if( seccion.classList.contains("vw-80")){
    // seccion.classList.remove("vw-80")
    // }else{
    //     seccion.classList.add("vw-80")
    // }
    // seccion.classList.toggle("vw-80")
    let salida = seccion.classList.contains("vw-80") ? seccion.classList.remove("vw-80") : seccion.classList.add("vw-80")
} )



