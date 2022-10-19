import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminRegistroPage } from './admin-registro.page';

const routes: Routes = [
  {
    path: '',
    component: AdminRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRegistroPageRoutingModule {}
