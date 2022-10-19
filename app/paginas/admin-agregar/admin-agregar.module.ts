import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminAgregarPageRoutingModule } from './admin-agregar-routing.module';

import { AdminAgregarPage } from './admin-agregar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminAgregarPageRoutingModule
  ],
  declarations: [AdminAgregarPage]
})
export class AdminAgregarPageModule {}
