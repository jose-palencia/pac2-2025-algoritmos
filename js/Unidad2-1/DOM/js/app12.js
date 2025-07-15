const $busqueda = document.querySelector('.busqueda');

$busqueda.addEventListener('input', (e) => {
    // console.log(e.type);
    console.log(e.target);
    if(e.target.value === '') {
        console.log('fallo la validación');
        

    }
})