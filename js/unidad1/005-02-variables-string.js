const producto = 'Monitor 27';


console.log(producto);

// Tamaño de un string
console.log(`total caracteres: ${producto.length}`);

// Buscar valores dentro de un string
console.log(producto.indexOf('Monitor'));
console.log(producto.indexOf('i'));
console.log(producto.indexOf('27'));
console.log(producto.indexOf(' '));

// No existe
console.log(producto.indexOf('Tablet'));

// Función includes
console.log(producto.includes('Monitor'));
console.log(producto.includes('monitor'));

