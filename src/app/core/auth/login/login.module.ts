import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { AngularModule } from 'src/app/core/shared/angular.module';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  imports: [
    LoginRoutingModule,
    AngularModule
  ],
  providers: [],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginRoutingModule
  ]
})
export class LoginModule { }