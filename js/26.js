//This
// window.nombre = 'Desconocido'
// window.total = 5000

const reservacion = {
  nombre: 'Miguel',
  apellido: 'Vásquez',
  total: 5000,
  pagado: false,
  correo: 'correo@correo',
  informacion:function() {
    console.log(`Nombre del cliente ${this.nombre} y su total a pagar es ${this.total}`);
  },
  comprar:function(total){
    5000
  }
  };


reservacion.informacion();