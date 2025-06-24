"use strict";

// Objeto literal
const producto = {
    nombre: 'Semitas',
    precio: 35,
    disponible: true,
    imagen: 'semita.jpg'
}

// Congelar objeto
// Object.freeze(producto);

// Sellar objeto
Object.seal(producto);

producto.disponible = false;

// delete producto.disponible;
// producto.color = 'Blanco';

console.log(producto);
console.log(Object.isFrozen(producto));



// producto = {}