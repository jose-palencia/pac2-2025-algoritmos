iniciarApp();

function iniciarApp() {
    console.log('Iniciando app...');
    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda función');
    terceraFuncion('Juan Perez')   
}

function terceraFuncion(usuario) {
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
    cuartaFuncion();
}

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return total * 1.15;
}

agregarCarrito(350);
agregarCarrito(120);
agregarCarrito(320);

const totalPagar = calcularImpuesto(total);

console.log(`Total: ${total}`);
console.log(`Total a pagar: ${totalPagar}`);
