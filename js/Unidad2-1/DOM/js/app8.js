const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

// btnFlotante.addEventListener('click', () => {
//     console.log('Hola mundo!!');
// });

// let count = 0;


btnFlotante.addEventListener('click', mostrarOcultarFooter);

// function mostrarOcultarFooter() {
//     count++;
//     console.log(`Hola mundo ${count}`);
    
// }

function mostrarOcultarFooter() {
    if(footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X - Cerrar';
    }    
}