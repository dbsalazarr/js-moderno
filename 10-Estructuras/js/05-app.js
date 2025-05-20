// Cuando tienes múltiples condiciones por revisar, una forma fácil de leerlo es con un switch...

const metodoPago = 'other';

switch(metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago} revisaremos que tenga fondos primero`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago} espere un momento...`);
        break;
    case 'afectivo' :
        console.log(`Por el momento no se cuenta con este método de pago`)
        break;
    default:
        console.log('Aún no has pagado');
        break;
}


// Los Switch también pueden ejecutar funciones, no solamente console.logs y también puedes tener 2 condiciones en un mismo if