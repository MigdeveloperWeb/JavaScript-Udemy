const boton = document.querySelector('#boton');
boton.addEventListener('click', function(){
  console.log('Diste click');
  Notification.requestPermission()
  .then(resultado => console.log(`El resultado es ${resultado}`))
});
let contador = 0;
function mostrar() {
contador++;
}
 if (contador == 1) {
 document.getElementById("texto").innerHTML="Hola, soy <NAME> y estoy aquí para ayudarte con tus caprichos";
 document.getElementById('texto').innerHTML='Hola';
 } else{
 document.getElementById("texto");
 }

 if(Notification.permission == 'granted'){
  new Notification('Esta es una notificacion', {
    icon: 'img/xD.jpg',
    body: 'Una carta para el corazon'
  })
 }