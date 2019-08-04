import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UsuarioService {
  constructor(private http: HttpClient) { }

  getAll() : Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.apiUrl}/users`);
  }

  searchUsers(username: string) : Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.apiUrl}/users/search`, { params: { username: username } });
  }

  throwError() {
    return this.http.get<any>(`${environment.apiUrl}/users/throwError`);
  }  
}