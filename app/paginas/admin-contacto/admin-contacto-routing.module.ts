import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminContactoPage } from './admin-contacto.page';

const routes: Routes = [
  {
    path: '',
    component: AdminContactoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminContactoPageRoutingModule {}
