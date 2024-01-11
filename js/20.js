
const reproductor = {
  reproducir : function(id){
    console.log(`Reproduciendo Cancion ${id}`)
  },
  pausar: function(){
    console.log('Pausando...')
  }
}

reproductor.borrarCancion = function(id){
  console.log(`Eliminando la cancion: ${id}`)
  delete this[id] //this es el objeto que se esta ejecutando, en este caso la funcion borrarCancion del
}

reproductor.reproducir('Ella tiene novio (Anuel)');

reproductor.pausar();
reproductor.borrarCancion('De anuel');