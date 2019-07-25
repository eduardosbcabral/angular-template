import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  @ViewChild('drawer', {static: false}) 
  drawer: MatDrawer;

  constructor() {}

  ngOnInit() {}

  toogle() {
    this.drawer.toggle()
  }

}
