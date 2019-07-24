import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { HeaderComponent } from './header/header.component';
import { DrawerComponent } from './drawer/drawer.component';
import { PagesRoutingModule } from '../pages/pages-routing.module';

@NgModule({
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    PagesRoutingModule
  ],
  providers: [],
  declarations: [
    HeaderComponent,
    DrawerComponent,
  ],
  exports: [
    HeaderComponent
  ]
})
export class UiModule { }