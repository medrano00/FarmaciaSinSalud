import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminMenuPageRoutingModule } from './admin-menu-routing.module';

import { AdminMenuPage } from './admin-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminMenuPageRoutingModule
  ],
  declarations: [AdminMenuPage]
})
export class AdminMenuPageModule {}
