// Arreglos o Arrays

const numeros = [10,20,30,40,50];

// const arreglo = ["hola", 10, true, "si", null, {nombre: "Miguel", trabajo: "Programador"},[1,2,3] ];

// console.log(arreglo);

// console.log(numeros[4]);
// console.log(numeros[2]);

// console.log(meses.length);

// numeros.forEach( function(numeros){
//   console.log(numeros)
// })

// numeros [5] = 50;
// numeros [6] = 70;
numeros.push(60);

numeros.unshift(-10,-20,-30);

console.table(numeros);

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

// meses.pop();
// meses.shift();

// meses.splice(2, 1);
console.table(meses)

const nuevoArreglo = [...meses, 'Junio'];
console.log(nuevoArreglo)