const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
    {nombre: 'Celular G8 LG', precio: 6000},
    {nombre: 'Televisor de 65 pulgadas', precio: 18000},
    {nombre: 'Mouse Logi', precio: 3000},
    {nombre: 'Teclado Mecanico Epo Maker', precio: 2000},
    {nombre: 'Monitor 27 pulgadas', precio: 7000},
]

const nombreMes = 'Febrero';

const indice = meses.findIndex(mes => mes === nombreMes);

console.log(indice);

const indice2 = carrito.findIndex(producto => producto.precio > 7000);

console.log(indice2);

meses.forEach((mes, index) => {
    if(mes === nombreMes) {
        console.log(`${nombreMes} encontrado en el indice ${index}`);        
    }
})