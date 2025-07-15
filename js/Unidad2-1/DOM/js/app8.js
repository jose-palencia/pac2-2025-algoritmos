const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

// btnFlotante.addEventListener('click', () => {
//     console.log('Hola mundo!!');
// });

let count = 0;


btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    count++;
    console.log(`Hola mundo ${count}`);
    
}