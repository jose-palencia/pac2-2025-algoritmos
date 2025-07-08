// verdadero o que sea falso

const puntos = 1000;
const puntos2 = '1000'
if(puntos === 1000) {
    console.log('Si es igual');
} else {
    console.log('No es igual');
}


if(puntos2 === 1000) {
    console.log('Si es igual' );
} else {
    console.log('No es igual');
    
}

console.log('============ Mayor que o Menor que ============');

// const dinero = 200;
// const totalPagar = 300;
// const edad = 25;

// if(edad >= 18) {
//     if(dinero > totalPagar) {
//         console.log('Puede proceder a realizar el pago');
//     } else {
//         console.log('Fondos insuficientes');
//     }
// } else {
//     console.log('No tiene la edad para realizar esta transacción');
    
// }

const dinero = 600;
const totalPagar = 500;
const tarjeta = false;
const cheques = true;

if(dinero >= totalPagar) {
    console.log('Se puede realizar el cobro en efectivo');
} else if (tarjeta) {
    console.log('Puede pagar con su tarjeta de crédito');
} else if (cheques) {
    console.log('Puede pagar con cheque');
} else {
    console.log('Fondos insuficientes');
    
}
