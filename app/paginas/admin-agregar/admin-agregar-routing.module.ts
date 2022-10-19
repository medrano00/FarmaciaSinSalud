import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAgregarPage } from './admin-agregar.page';

const routes: Routes = [
  {
    path: '',
    component: AdminAgregarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAgregarPageRoutingModule {}
