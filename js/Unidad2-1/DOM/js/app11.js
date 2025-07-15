const $busqueda = document.querySelector('.busqueda');

$busqueda.addEventListener('keydown', () => {
    console.log('escribiendo');    
})

$busqueda.addEventListener('keyup', () => {
    console.log('Dejando de escribir');
})

$busqueda.addEventListener('blur', (e) => {
    console.log(e.target.value);    

})

$busqueda.addEventListener('copy', () => {
    console.log('texto copiado');
})

$busqueda.addEventListener('paste', () => {
    console.log('text pegado');
    
})

$busqueda.addEventListener('cut', () => {
    console.log('texto cortado');
    
})

