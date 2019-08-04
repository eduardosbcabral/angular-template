import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { ListarUsuariosComponent } from './listar/listar-usuarios.component';
import { UsuariosComponent } from './usuarios.component';
import { CadastrarUsuarioComponent } from './cadastrar/cadastrar-usuario.component';


const routes: Routes = [{
  path: '',
  component: UsuariosComponent,
  children: [
    {
      path: 'listar',
      component: ListarUsuariosComponent
    },
    {
      path: 'cadastrar',
      component: CadastrarUsuarioComponent
    }
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule {}