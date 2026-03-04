import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Rutas principales del módulo raíz
const routes: Routes = [
  {
    path: '', // Ruta raíz
    redirectTo: '/users', // Redirige por defecto al módulo de usuarios
    pathMatch: 'full',
  },
  {
    path: 'users',
    // loadChildren: () =>
    //   import('./users/users.module').then((m) => m.UsersModule), // Carga diferida del módulo users
  },
  // {
  //   path: 'acceso',
  //   component: AccesoComponent,
  //   canActivate: [AuthenticatedGuard]
  // },
  // {
  //   path: 'acceso/:id',
  //   component: AccesoComponent,
  //   canActivate: [AuthenticatedGuard]
  // },
  {
    path: '**', // Wildcard: para cualquier otra ruta
    redirectTo: '/users', // Redirige de nuevo a la ruta por defectoo
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuración de rutas
  exports: [RouterModule], // Exporta el RouterModule parla que sea accesible en AppModule
})
export class AppRoutingModule { }