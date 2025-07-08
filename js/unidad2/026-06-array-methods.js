const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
const meses2 = ['Julio', 'Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

const carrito = [
    {nombre: 'Celular G8 LG', precio: 6000},
    {nombre: 'Televisor de 65 pulgadas', precio: 18000},
    {nombre: 'Mouse Logi', precio: 3000},
    {nombre: 'Teclado Mecanico Epo Maker', precio: 2000},
    {nombre: 'Monitor 27 pulgadas', precio: 7000},
]

let resultado;

resultado = carrito.every(producto => producto.precio <= 20000)


resultado = meses.concat(meses2, meses3);


resultado = [...meses, ...meses2, ...meses3, 'Otro mes']


console.log(resultado);

// error en data