const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
    {nombre: 'Celular G8 LG', precio: 6000},
    {nombre: 'Televisor de 65 pulgadas', precio: 18000},
    {nombre: 'Mouse Logi', precio: 3000},
    {nombre: 'Teclado Mecanico Epo Maker', precio: 2000},
    {nombre: 'Monitor 27 pulgadas', precio: 7000},
]

let resultado;
resultado = carrito.filter(producto => producto.precio >= 6000);
resultado = carrito.filter(producto => producto.precio < 6000);
resultado = carrito.filter(producto => producto.nombre === 'Celular G8 LG');
resultado = carrito.filter(producto => producto.nombre !== 'Celular G8 LG');

resultado = carrito.filter(producto => producto.precio >= 2000 && producto.precio <= 7000);


console.log(resultado);
