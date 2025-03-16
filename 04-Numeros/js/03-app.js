// Math es parte de la ventana global de JavaScript, tiene una serie de operaciones que pueden ser muy útiles y algunas actuan de forma algo extraña, asi que vamos a verlas.

let resultado; 

// Pi
resultado = Math.PI;
console.log(resultado);
// redondeo
resultado = Math.round(2.5);
console.log(resultado);

// redondeo arriba (ceil)
resultado = Math.ceil(2.2);
console.log("Redondeo arriba (2.2) = " + resultado);
// redondeo abajo (floor)
resultado = Math.floor(2.2);
console.log("Redondeo abajo (2.2) = " + resultado);

// Raiz cuadrada
resultado = Math.sqrt(144);
console.log(resultado);
// Abssoluto
resultado = Math.abs(-300);
console.log(resultado);
// Potencia
resultado = Math.pow(8, 3);
console.log(resultado);
// Minimo
resultado = Math.min(3,5,1,2,9,4,2, -3);
console.log(resultado);
// Max
resultado = Math.max(4,1,21,4,15,5,11,5);
console.log(resultado);
// Aleatorio
resultado = Math.random();
console.log(Math.round(resultado*10));
// Aleatorio dentro de un rango:
resultado =  Math.floor( Math.random() * 10 );


console.log(resultado);