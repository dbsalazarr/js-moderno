/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
*/


let terminoPrevio = 0
let temporal = 1

let sigTermino = 0

// ¡Podría incluir arreglos?
for (let i = 0; i < 13; i++){

    if(i == 0){
        console.log(i)
    }else{
        sigTermino = temporal + terminoPrevio
        temporal = terminoPrevio
        terminoPrevio = sigTermino
        console.log(sigTermino);
    }
}