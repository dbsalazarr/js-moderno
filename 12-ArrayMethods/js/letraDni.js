'use strict'

letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"]

let dni = 74123797

function letraDNI(dni){
    return dni % 23
}

let modulo = letraDNI(dni)

console.log(modulo)

let caracter
caracter = letras[modulo]

console.log(caracter)

