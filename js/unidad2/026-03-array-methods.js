const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
    {nombre: 'Celular G8 LG', precio: 6000},
    {nombre: 'Televisor de 65 pulgadas', precio: 18000},
    {nombre: 'Mouse Logi', precio: 3000},
    {nombre: 'Teclado Mecanico Epo Maker', precio: 2000},
    {nombre: 'Monitor 27 pulgadas', precio: 7000},
]

let total = 0;

carrito.forEach(producto => total += producto.precio);

console.log(total);

total = carrito.reduce((total, producto) => total + producto.precio, 0);

console.log(total);
