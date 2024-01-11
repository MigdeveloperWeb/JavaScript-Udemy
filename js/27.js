// POO

const producto = {
  nombre: 'Monitor 27 Pulgadas',
  precio: 500,
  disponible: true // booleano
 }

function Producto(nombre, precio){
  this.nombre = nombre;
  this.precio = precio;
}
const producto2 = new Producto('Monitor 20 Pulgadas', 800);
const producto3 = new Producto('laptop', 300);

function resetearProducto(producto){
  return `El producto ${producto.nombre} tiene un precio de: $${producto.precio}`;
}
// console.log("reseteando");
// for (let key in producto) {      // para cada propiedad del objeto
//   if (!producto[key]) continue; // si la propiedad es undefined o null no hace nada
//   delete producto[key];
//   };



console.log(producto2 , producto3,);
console.log(resetearProducto(producto2))

Producto.prototype.resetearProducto = function(){
  return `El producto ${producto.nombre} tiene un precio de: $${producto.precio}`;
}
  