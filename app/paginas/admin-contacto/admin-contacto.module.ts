import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminContactoPageRoutingModule } from './admin-contacto-routing.module';

import { AdminContactoPage } from './admin-contacto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminContactoPageRoutingModule
  ],
  declarations: [AdminContactoPage]
})
export class AdminContactoPageModule {}
