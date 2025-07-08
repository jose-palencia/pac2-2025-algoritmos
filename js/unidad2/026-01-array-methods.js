const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
    {nombre: 'Celular G8 LG', precio: 6000},
    {nombre: 'Televisor de 65 pulgadas', precio: 18000},
    {nombre: 'Mouse Logi', precio: 3000},
    {nombre: 'Teclado Mecanico Epo Maker', precio: 2000},
    {nombre: 'Monitor 27 pulgadas', precio: 7000},
]

const nombreMes = 'Diciembre';

let existe3;

meses.forEach(mes => {
    if(mes === nombreMes) {
        existe3 =  true;
        console.log(`El mes de ${nombreMes} existe.`);
    }
});

const resultado = meses.includes(nombreMes);
console.log(resultado);

const existe = carrito.some(producto => producto.nombre === 'Mouse Logi');

// console.log(existe);


const existe2 = meses.some(mes => mes === nombreMes);

console.log(existe2);
