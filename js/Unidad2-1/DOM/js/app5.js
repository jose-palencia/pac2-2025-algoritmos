// Eliminar elementos del DOM
const primerEnlace = document.querySelector('a');
// primerEnlace.remove();

console.log(primerEnlace);

// Eliminar desde el padre
const navegacion = document.querySelector('.navegacion');
navegacion.removeChild(navegacion.children[2])
