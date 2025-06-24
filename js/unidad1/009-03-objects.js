// Objeto literal
const producto = {
    nombre: 'Semitas',
    precio: 35,
    disponible: true,
    imagen: 'semita.jpg'
}

// const { nombre, precio } =  producto;

// console.log(nombre);
// console.log(precio);


// Objeto anidado
const producto2 = {
    nombre: 'Monitor de 27 pulgadas',
    precio: 6000,
    disponible: true,
    imagen: 'imagen2.jpg',
    informacion: {
        medidas: {
            peso: '2kg',
            medida: '0.5m'
        },
        fabricacion: {
            pais: 'China'
        }
    },
}

// console.log(producto2);
// console.log(producto2.informacion);
// console.log(producto2.informacion.fabricacion);
// console.log(producto2.informacion.fabricacion.pais);

const { nombre } = producto2;
const { informacion } = producto2;
const { informacion: {fabricacion} } = producto2;
const { informacion: {fabricacion: {pais}} } = producto2;

console.log(pais);
