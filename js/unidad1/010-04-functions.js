const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con id: ${id}`);
    },
    pausar: function() {
        console.log('Pausando...');
    },
    createPlaylist: function(nombre) {
        console.log(`Playlist ${nombre} creada.`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist ${nombre}`);
        
    }
};

reproductor.reproducir(120);
reproductor.pausar();
reproductor.createPlaylist('Hacer deploy sin llorar');
reproductor.reproducirPlaylist('Hacer deploy sin llorar');

reproductor.borrarCancion = function(id) {
    console.log(`Canción con id: ${id} borrada`);
    
}

reproductor.borrarCancion(100);