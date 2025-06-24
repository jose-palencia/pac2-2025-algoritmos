const sloganUnah = function() {
    console.log('#ProgramaPUMA');
} 

const sloganUnah2 = () => console.log('#ProgramaPUMA');




sloganUnah();
sloganUnah2();

const aprendiendo = function(lenguaje, tema) {
    console.log(`Aprendiendo ${lenguaje} ${tema}`);
}

const aprendiendo2 = (lenguaje, tema) => 
    console.log(`Aprendiendo ${lenguaje} ${tema}`);



aprendiendo('JavaScript', 'Arrow Functions');
aprendiendo2('JavaScript', 'Arrow Functions');


const reproductor = {
    reproducir: (id) => console.log(`Reproduciendo canción con id: ${id}`),
    pausar: () => console.log('Pausando...'),
    createPlaylist: (nombre) => console.log(`Playlist ${nombre} creada.`),
    reproducirPlaylist: (nombre) => console.log(`Reproduciendo la playlist ${nombre}`)
};
