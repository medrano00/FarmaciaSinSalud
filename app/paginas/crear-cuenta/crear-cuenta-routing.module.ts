import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearCuentaPage } from './crear-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: CrearCuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearCuentaPageRoutingModule {}
