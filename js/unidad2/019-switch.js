const metodoPago = 'Bitcoin';

switch (metodoPago) {
    case 'Efectivo' :
        pagarEfectivo();
        break;
    case 'Tarjeta' :
        console.log(`Pago con ${metodoPago}`);
        break;
    case 'Transferencia':
        console.log(`Pago con ${metodoPago}`);
        break;
    default:
        console.log('No ha seleccionado un metodo de pago valido');
        break;        
}

function pagarEfectivo() {
    console.log('Pagando en efectivo');
}