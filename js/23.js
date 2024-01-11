const metodoPago = 'Tarjeta';

 switch(metodoPago){
  case 'Tarjeta':
    console.log('El pago se realizara con tarjeta');
    break;
  case 'Cheque':
    console.log('El pago se realizara con Cheque');
    break;
  case 'Efectivo':
    console.log('El pago se realizara con Efectivo');
    break;
    default:
      console.log('Aun no has pagado');
    break;
 }