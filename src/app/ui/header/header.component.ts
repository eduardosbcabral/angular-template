import { Component, OnInit, ViewChild } from '@angular/core';
import { DrawerComponent } from '../drawer/drawer.component';
import { AuthenticationService } from 'src/app/core/auth/authentication.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/pages/usuarios/usuario.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild(DrawerComponent, {static: false})
  drawer: DrawerComponent;

  currentUser: Usuario;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
