import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario.model';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class UsuarioService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Usuario[]>(`${environment.apiUrl}/users`);
  }
}