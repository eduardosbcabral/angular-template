import { Component, OnInit, ViewChild } from '@angular/core';
import { DrawerComponent } from '../drawer/drawer.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  @ViewChild(DrawerComponent, {static: false})
  drawer: DrawerComponent;

  constructor() {}

  ngOnInit() {}

}
