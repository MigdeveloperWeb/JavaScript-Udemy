const usuarioAutenticado = new Promise( (resolve, reject) =>{
  const auth = true;
  if (auth) {
    resolve('Usuario autenticado');
    } else{
      reject ('No se pudo realizar la acción');      
   }
})

usuarioAutenticado
  .then( function(resultado){
    console.log('Desde el promise');
    console.log(resultado);
  })
 .catch((error)=>{console.log(`Error: ${error}`);})
 console.log(usuarioAutenticado);



// Promise {<pending>}