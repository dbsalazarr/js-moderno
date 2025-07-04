'use strict'
/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function isPrime(number){
    let dividendos = 0
    for(let i = 1; i <= number; i++){
        if( number % i == 0){
            dividendos += 1
        }
    }
    let prime = dividendos <= 2 ? true : false
    return prime
}

// Mostrar los números del 1 al 100
function main(){
    let primeList = []
    for(let j = 1; j <= 100; j++){
        if( isPrime(j)){
            primeList.push(j)
        }
    }
    primeList.forEach( prime => console.log(prime) )
}

main()