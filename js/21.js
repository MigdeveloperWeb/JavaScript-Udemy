const sumar2 = (n1, n2) => console.log(n1 + n2)

sumar2(20, 50);


const aprendiendo = (tecnologia) =>{
  console.log(`Aprendiendo ${tecnologia}`)
}

aprendiendo('JavaScript');


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

// meses.forEach(function(mes){
//   if(mes == 'Marzo'){
//     console.log('Marzo si existe');
//   }
// });

let resultado;


resultado = carrito.some(producto => producto.nombre === 'Teclado');


resultado = carrito.reduce((total, producto) => total + producto.precio, 0);


resultado = carrito.filter( producto => producto.precio > 400);

resultado = carrito.filter( producto => producto.nombre !== 'Luces led');

console.log(resultado);
console.log(carrito);