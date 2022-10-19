import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage{

  btnTransfer(){
    //const precio;
    alert('Precio del Producto: $.{precio} \n\n DATOS DE TRANSFERENCIA \n FERNANDA FRANCISCA TORRES SILVA \n 17568300-K \n Cuenta Corriente \n Nº 6-778-24-26450-8 \n Banco De Chile \n fersilva@gmail.com');
  }

  btnCarro(){
    //const precio;
    alert('El producto se a añadido al carrito');
  }

  btnChao(){
    //const precio;
    alert('El producto se a eliminado del carrito');
  }

}
