const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

const carrito = [
  { nombre: 'Monitor 20 Pulgadas', precio: 500},
  { nombre: 'Television 50 pulgadas', precio: 700},
  { nombre: 'Computadora Gamer', precio: 900},
  { nombre: 'Cornetas Bluethoot', precio: 50},
  { nombre: 'Audifonos Gamer', precio: 30},
  { nombre: 'Router de Internet', precio: 20},
  { nombre: 'Joystick', precio: 20},
  { nombre: 'Teclado', precio: 60},
  { nombre: 'Luces led', precio: 10},
];
console.log(carrito)

meses.forEach(function(mes){
  if(mes == 'Marzo'){
    console.log('Marzo si existe');
  }
});

let resultado = meses.includes('Marzo');


resultado = carrito.some(function(producto){
  return producto.nombre === 'Teclado'
}); 
resultado = carrito.some(function(producto){
  return total + producto.precio
}, 0);


resultado = carrito.filter(function(){
  return producto.precio > 400
});
resultado = carrito.filter(function(){
  return producto.nombre === 'Teclado'
});

console.log(resultado);
console.log(carrito);