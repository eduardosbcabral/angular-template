import { Component } from "@angular/core";

import { MENU_ITEMS } from './menu-items-list';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  
  items = MENU_ITEMS;

  config = {
    paddingAtStart: true,
    interfaceWithRoute: true,
    classname: 'menu-list',
  //   fontColor: 'rgb(8, 54, 71)',
  //   backgroundColor: 'rgb(208, 241, 239)',
  //   selectedListFontColor: 'red',
   };

  constructor(private router: Router) { }

  selectedItem(item: MenuItem) {
  }

}