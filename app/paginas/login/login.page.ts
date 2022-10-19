import { Component, OnInit } from '@angular/core';
import {Router,NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user={
    usuario:"",
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

  btnUser(){
    alert('A ingresado correctamente a su cuenta de usuario');
  }

}
