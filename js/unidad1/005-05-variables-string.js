const producto = 'Monitor de 20 pulgadas';

// Reemplazar texto por otro
console.log(producto);
console.log(producto.replace(' pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

// Extraer una parte de una cadena de texto
console.log('SLICE:');

console.log(producto.slice(0, 10));
console.log(producto.slice(8));
console.log(producto.slice(2,1));

// Alternativa a slice
console.log('SUBSTRING');
console.log(producto.substring(0, 10));
console.log(producto.substring(8));
console.log(producto.substring(2,3));


console.log('Char At:');
console.log(producto.charAt(3));

