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

const producto3 = {
    nombre: 'Coca Cola',
    precio: 22,
    cantidad: 1
}

const producto4 = {
    nombre: 'Copan Dry',
    precio: 22,
    cantidad: 1
}

let resultado;

resultado = [producto, producto2, producto3, producto4];
// resultado = [...resultado, producto2];
// resultado = [producto3, ...resultado];
// resultado = [...resultado, producto4, ...resultado];

// console.log(resultado);

// Eliminar el ultimo elemento del arreglo
// resultado.pop();

// Eliminar el primer elemento del arreglo
// resultado.shift();

// resultado.splice(1,1);
resultado.splice(2,1);

console.table(resultado);