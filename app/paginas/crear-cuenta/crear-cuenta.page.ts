import { Component, OnInit } from '@angular/core';
import {Router,NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.page.html',
  styleUrls: ['./crear-cuenta.page.scss'],
})
export class CrearCuentaPage implements OnInit {

  user={

    nombre:"",
    apellido:"",
    correo:"",
    password:"",
    confirm:""
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

  ingresar(){
    let NavigationExtras:NavigationExtras={
      state:{
        user: this.user,
        


      }
    };
    this.router.navigate(['/home'],NavigationExtras);
  }

  btnCreate(){
    alert('Su cuenta a sido creada con exito');
  }

}