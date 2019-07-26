import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../core/auth/helpers/auth.guard';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: 'gestao-sistema/usuarios',
      loadChildren: () => import('./usuarios/usuarios.module')
        .then(m => m.UsuariosModule), 
    },
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}