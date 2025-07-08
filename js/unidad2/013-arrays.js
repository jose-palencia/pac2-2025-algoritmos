const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

//meses[0] = 'Nuevo mes';
//meses[10] = 'Octubre';

meses.unshift('Nuevo mes'); 
meses.push('Julio'); // Agregar elemento al final del arreglo


const carrito = [];

const producto = {
    nombre: 'Semitas',
    precio: 35,
    cantidad: 1
};

const producto2 = {
    nombre: 'Café',
    precio: 180,
    cantidad: 1
};

carrito.push(producto, producto2);
// carrito.push(producto2);

console.log(meses);
console.log(carrito);

