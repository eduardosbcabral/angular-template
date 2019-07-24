import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

import { MENU_ITEMS } from '../../pages/pages-menu';


@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  menu = MENU_ITEMS;
  
  @ViewChild('drawer', {static: false}) 
  drawer: MatDrawer;

  constructor() {}

  ngOnInit() {}

  toogle() {
    this.drawer.toggle()
  }

}
