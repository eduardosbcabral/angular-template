import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

import { PanelMenuModule } from 'primeng/panelmenu';

import { HeaderComponent } from './header/header.component';
import { DrawerComponent } from './drawer/drawer.component';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import { DrawerService } from './drawer/drawer.service';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    PagesRoutingModule,
    PanelMenuModule
  ],
  providers: [DrawerService],
  declarations: [
    HeaderComponent,
    DrawerComponent,
    MenuComponent,
  ],
  exports: [
    HeaderComponent
  ]
})
export class UiModule { }