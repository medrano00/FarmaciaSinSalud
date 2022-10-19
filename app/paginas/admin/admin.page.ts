import { Component, OnInit } from '@angular/core';
import {Router,NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  user={

    correo:"",
    password:""
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

  ingresar(){
    let NavigationExtras:NavigationExtras={
      state:{
        user: this.user

      }
    };
    this.router.navigate(['/home'],NavigationExtras);
  }

  btnAdmin(){
    alert('A ingresado correctamente a su cuenta de administrador');
  }
}