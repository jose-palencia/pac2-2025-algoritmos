const enlace = document.createElement('a');
enlace.textContent = 'Nuevo Link';
enlace.href = 'http://google.hn';
enlace.target = '_blank';

const navegacion = document.querySelector('.navegacion');

// navegacion.appendChild(enlace);

navegacion.insertBefore(enlace, navegacion.children[1]);

console.log(navegacion);
