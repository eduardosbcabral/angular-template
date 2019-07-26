import { NgModule } from "@angular/core";

import { UsuariosRoutingModule } from './usuarios-routing.component';
import { ListarUsuariosComponent } from './listar/listar-usuarios.component';
import { UsuariosComponent } from './usuarios.component';
import { AngularModule } from 'src/app/core/shared/angular.module';


@NgModule({
  imports: [
    AngularModule,
    UsuariosRoutingModule
  ],
  declarations: [
    UsuariosComponent,
    ListarUsuariosComponent
  ]
})
export class UsuariosModule {}