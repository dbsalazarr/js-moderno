// Existe otra forma de comparar si un valor es verdadero y es por medio de algo llamado un operador ternario

const boolean1 = true;
const boolean2 = false;


if(boolean1) {
    console.log('si es true')
} else {
    console.log('no, no es true')
}

//El código anterior es fácil de leer no?, pero se puede simplificar un poco más
console.log( boolean1  ? 'Acceso Concedido' : 'Inicia Sesión' )