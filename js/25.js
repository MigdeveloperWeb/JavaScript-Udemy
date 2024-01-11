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

//forEach
carrito.forEach(producto => console.log(producto.nombre));

//Map
const arreglo2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);

console.log(arreglo2);
