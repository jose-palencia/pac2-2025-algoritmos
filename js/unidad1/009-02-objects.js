// Objeto literal
const producto = {
    nombre: 'Semitas',
    precio: 35,
    disponible: true,
    imagen: 'semita.jpg'
}


// Agregar
producto.creadoPor = 'Juan Perez';

// Quitar
delete producto.disponible;

console.log(producto);

