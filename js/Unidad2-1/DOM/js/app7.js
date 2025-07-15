const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria','concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Metallica';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = 'L 2,000 por persona';
parrafo3.classList.add('precio');

const info = document.createElement('div');
info.classList.add('info');

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

const imagen = document.createElement('img');
imagen.src = 'https://townsquare.media/site/366/files/2020/07/GettyImages-1080027056.jpg?w=980&q=75';
imagen.alt = 'Imagen de la banda';

const card = document.createElement('div');
card.classList.add('card');

card.appendChild(imagen);
card.appendChild(info);

const contenedor = document.querySelector('.hacer .contenedor-cards');

contenedor.insertBefore(card, contenedor.children[1]);

console.log(card);

