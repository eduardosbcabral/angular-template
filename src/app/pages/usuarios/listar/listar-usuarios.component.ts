import { Component, OnInit } from "@angular/core";
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  displayedColumns: string[] = ['username', 'firstName', 'lastName'];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios = () => {
    this.usuarioService.getAll()
    .pipe(
      map(usuarios => this.usuarios = usuarios)
    ).subscribe();
  }
}