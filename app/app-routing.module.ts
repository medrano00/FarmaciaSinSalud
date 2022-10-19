import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'stock',
    loadChildren: () => import('./paginas/stock/stock.module').then( m => m.StockPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./paginas/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'crear-cuenta',
    loadChildren: () => import('./paginas/crear-cuenta/crear-cuenta.module').then( m => m.CrearCuentaPageModule)
  },
  {
    path: 'admin-contacto',
    loadChildren: () => import('./paginas/admin-contacto/admin-contacto.module').then( m => m.AdminContactoPageModule)
  },
  {
    path: 'admin-registro',
    loadChildren: () => import('./paginas/admin-registro/admin-registro.module').then( m => m.AdminRegistroPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./paginas/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'admin-agregar',
    loadChildren: () => import('./paginas/admin-agregar/admin-agregar.module').then( m => m.AdminAgregarPageModule)
  },
  {
    path: 'admin-menu',
    loadChildren: () => import('./paginas/admin-menu/admin-menu.module').then( m => m.AdminMenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
