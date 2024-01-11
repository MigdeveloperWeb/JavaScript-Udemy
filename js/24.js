 //For Loop
  for ( let i = 0; i <= 10; i++) {
    console.log(i)
  }
  for ( let i = 1; i <= 100; i++) {
    if ( i % 2 === 0 ) {
      console.log(`El numero ${i} Es PAR`)
    } else{
      console.log (`El numero ${i} es IMPAR`);
    }
  }

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

 for(let i = 0; i <= carrito.length; i++){
   console.log( carrito[i].nombre );
 }

 //While Loop

 let i = 1;
 while(i<= 100){


 if(i % 2 === 0);{ 
   console.log(`El numero ${i} es PAR`);
 {
   console.log (`El numero ${i} es IMPAR`);
 }




   i++;
 }
 }

// Do While Loop

do{
 console.log(i);


  i++;
} while(i < 10);