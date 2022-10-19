import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage {

  btnRemove(){
    alert('El producto a sido eliminado del carrito');
  }

  btnTransfer(){
    //const precio;
    alert('Precio del Producto: $.{precio} \n\n DATOS DE TRANSFERENCIA \n FERNANDA FRANCISCA TORRES SILVA \n 17568300-K \n Cuenta Corriente \n Nº 6-778-24-26450-8 \n Banco De Chile \n fersilva@gmail.com');
  }
}
