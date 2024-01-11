// Clases

class Producto {
  constructor (nombre, precio){
     this.nombre = nombre; // 
     this.precio = precio;
    }
    formatearProducto(){
      return `El producto ${Producto.nombre} tiene un precio de: $${Producto.precio}`;
    }
  }

const producto2 = new Producto('Monitor 20 Pulgadas', 800);
const producto3 = new Producto('laptop', 300);

class Libro extends Producto{
   constructor (nombre, precio) {
    super(nombre,precio);
   };
   formatearProducto(){
    return `El producto ${Producto.nombre} tiene un precio de: $${Producto.precio}`;
  }
}
 
const libro = new Libro('JavaScript la Revolucion', 20);

console.log(libro.formatearProducto());
console.log(producto2.formatearProducto());