import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminRegistroPageRoutingModule } from './admin-registro-routing.module';

import { AdminRegistroPage } from './admin-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminRegistroPageRoutingModule
  ],
  declarations: [AdminRegistroPage]
})
export class AdminRegistroPageModule {}
