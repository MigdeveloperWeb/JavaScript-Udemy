function descargarNuevosClientes(){
  return new Promise (resolve =>{
    console.log('Descargando nuevos clientes...')
    setTimeout(() =>{
      resolve('Los clientes fueron descargados')
    }, 5000);
  })

}
function mostrarMensaje(mensaje){
  document.getElementById("contenedor").innerHTML = mensaje;
  console.log(mostrarMensaje);
  }


// setTimeout(function(){
//   console.log('Set time out...')
//   },5000);

//   setInterval(function(){
//     console.log('Set interval...')
//     },5000);

async function app(){
 try {
//   const resultado = await descargarNuevosClientes();
//   console.log(resultado);
const resultado = await Promise.all([descargarNuevosClientes()]);
console.log(resultado)
} catch (error) {
 console.log(error)
}


}

app();