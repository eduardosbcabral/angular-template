import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { DrawerComponent } from './drawer/drawer.component';
import { MenuComponent } from './menu/menu.component';
import { AngularModule } from '../core/shared/angular.module';
import { PrimeNgModule } from '../core/shared/prime-ng.module';


@NgModule({
  imports: [
    AngularModule,
    PrimeNgModule
  ],
  providers: [],
  declarations: [
    HeaderComponent,
    DrawerComponent,
    MenuComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class UiModule { }