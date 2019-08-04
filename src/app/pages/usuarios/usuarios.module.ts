import { NgModule } from "@angular/core";

import { UsuariosRoutingModule } from './usuarios-routing.component';
import { ListarUsuariosComponent } from './listar/listar-usuarios.component';
import { UsuariosComponent } from './usuarios.component';
import { AngularModule } from 'src/app/core/shared/angular.module';
import { NgBootstrapModule } from 'src/app/core/shared/ng-bootstrap.module';


@NgModule({
  imports: [
    AngularModule,
    NgBootstrapModule,
    UsuariosRoutingModule
  ],
  declarations: [
    UsuariosComponent,
    ListarUsuariosComponent
  ]
})
export class UsuariosModule {}