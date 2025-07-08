const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudia CSS', 'Estudia HTML', 'Dormir'];


for (let pendiente in pendientes) {
    console.log(pendiente);    
}

console.log('-----------------------------------------');

const carro = {
    modelo: 'L200',
    year: 2025,
    motor: '2.4'
}

for (let propiedad in carro) {
    console.log(propiedad);   
}

console.log('------------------------------------------');

for (let propiedad in carro) {
    console.log(carro[propiedad]);
}

console.log('------------------------------------------');

for (let [propiedad, valor] of Object.entries(carro) ) {
    console.log(`${propiedad}: ${valor}`);
}