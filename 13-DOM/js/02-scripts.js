// En este video estaremos viendo como seleccionar elementos por su clase...

// Seleccionando el header...

// Todos tus selectores inician con document...
const header = document.getElementsByClassName('contenedor'); // Es muy importante las mayusculas y minusculas...
console.log(header);

for ( let i = 0; i < header.length; i++){
    // console.log(header[i]);   
}

// const hero = document.getElementsByClassName('contenido-hero');
// console.log(hero);


// // Como las classes se pueden repetir, obviamente todas las coincidencias de classes se asignaran a contenedores.
// const contenedores = document.getElementsByClassName('contenedor');
// console.log(contenedores);


// // Si una clase no existe, no va a retornar nada...
// const noExiste = document.getElementsByClassName('no-existe');
// console.log(noExiste);

let footer = document.getElementsByClassName("nav-footer")
console.log(footer);

let algo = document.getElementsByClassName("Nadar")
console.log(algo);