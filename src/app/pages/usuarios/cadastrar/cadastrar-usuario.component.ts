import { Component, OnInit } from "@angular/core";
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: []
})
export class CadastrarUsuarioComponent implements OnInit {

  usuario: Usuario;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.throwError()
    .subscribe(err => console.log(err));
  }

}