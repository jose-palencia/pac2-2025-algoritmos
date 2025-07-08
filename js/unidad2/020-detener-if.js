const autenticado = true;

if(autenticado) { // Buena practica de programación en booleanos solo usar la variable sin comparar

}


const puntos = 350;

// if(puntos > 400 ) {
//     console.log('Excelente');    
// } else if (puntos > 500) {
//     console.log('Buen puntaje... felicidades');
// }


function revisarPuntos() {
    if(puntos > 400) {
        console.log('Excelente');
        return;
    }

    if(puntos > 300) {
        console.log('Buen puntaje... felicidades');
        return;
    }
}

revisarPuntos();

// Operador ternario
const puedePagar = false;

console.log( autenticado && puedePagar 
    ? 'Si esta autenticado y puede pagar' 
    : 'No puede pagar' );
