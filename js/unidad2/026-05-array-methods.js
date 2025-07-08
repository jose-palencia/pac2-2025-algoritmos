const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
    {nombre: 'Celular G8 LG', precio: 6000},
    {nombre: 'Televisor de 65 pulgadas', precio: 18000},
    {nombre: 'Mouse Logi', precio: 3000},
    {nombre: 'Teclado Mecanico Epo Maker', precio: 2000},
    {nombre: 'Monitor 27 pulgadas', precio: 7000},
]

let resultado;

carrito.forEach((producto, index) => {
    if(producto.nombre === 'Televisor de 65 pulgadas') {
        resultado = carrito[index];
    }
});


resultado = carrito.find(producto => producto.nombre === 'Televisor de 65 pulgadas');

console.log(resultado);
