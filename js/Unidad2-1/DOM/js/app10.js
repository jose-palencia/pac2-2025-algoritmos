const nav = document.querySelector('.navegacion');

nav.addEventListener('click', () => {
    console.log('Click en nav');
})

nav.addEventListener('mouseenter', () => {
    console.log('Entrando a la navegación');
    nav.style.backgroundColor = 'red';    
})

nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegación');
    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('mousedown', () => {
    console.log('Mouse down en navegación');    
})

nav.addEventListener('mouseup', () => {
    console.log('Mouse up en navegación');    
})

nav.addEventListener('dblclick', () => {
    console.log('Doble clic en navegación');
    
}) 