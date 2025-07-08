const producto = {
    nombre: 'Semitas',
    precio: 35,
    cantidad: 1
};

const { nombre } = producto;

console.log(nombre);

const numbers = [50, 100, 150, 200, 250, 300, 350];

const [primero, segundo, tercero] = numbers;

const [, , , cuarto] = numbers;

const [uno, dos, ...restoNumeros] = numbers;

console.log(primero);
console.log(segundo);
console.log(tercero);
console.log(cuarto);
console.log(restoNumeros);
