// Modificar texto o imágenes  con js
const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

console.log(encabezado.innerText);
console.log(encabezado.textContent);
console.log(encabezado.innerHTML);

encabezado.innerText = 'Hola Mundo'
encabezado.innerHTML = `
    <ul>
        <li>Uno</li>
        <li>Dos</li>
        <li>Tres</li>
    </ul>
`;

encabezado.textContent = 'Nuevo titulo, para la pagina'

document.querySelector('.contenido-hero h1').innerText = 'Hola Mundo'

const imagen = document.querySelector('.card img');
imagen.src = 'https://www.brettonwoodsproject.org/wp-content/uploads/2023/07/Honduras-Summer-Observer-2023-768x511.jpg'