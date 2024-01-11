function  obtenerEmpleados(){
  const archivo = 'empleados.json';
  fetch('archivo')
  .then( resultado =>{
    return resultado.json();
  })
  .then( datos =>{
    console.log(datos);
  })
  }
obtenerEmpleados();