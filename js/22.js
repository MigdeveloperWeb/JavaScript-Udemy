// const puntaje = 1000;

// if(puntaje !== 1000) {
//   console.log('No es igual')
// } else{
//   console.log("Si el puntaje es 1000 ");
// }

// const efectivo = 1000;
// const carrito = 800;

// if(efectivo > carrito){
//   console.log('El Usuario puede pagar')
// } else{
//   console.log('El Usuario no puede pagar')
// }

const rol = 'ADMINISTRADOR';

if(rol === 'ADMINISTRADOR'){
  console.log('Acceso a todo el sistema')

} else if(rol === 'Editor'){

  console.log('Solo acceso al editor de contenido');
} else {

  console.log('No tienes acceso')
}