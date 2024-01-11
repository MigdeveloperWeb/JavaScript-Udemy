// function sumar(n1, n2) {
//   return n1 + n2;
// }

// const reusltado =sumar(3, 5);

// console.log(reusltado)

let total = 0;

function agregarCarrito(precio){
  return total += precio;
}

function calcularImpuesto(total){
  return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

console.log(`El resultado es ${total}`);
console.log(total);

const totalAPagar = calcularImpuesto(total);

console.log(totalAPagar);