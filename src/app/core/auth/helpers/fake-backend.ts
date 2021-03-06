import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { materialize, dematerialize, delay, mergeMap } from 'rxjs/operators';
import { Usuario } from 'src/app/pages/usuarios/usuario.model';

const users: Usuario[] = [
  { id: 1, username: 'teste', password: 'teste', firstName: 'Test', lastName: 'User'},
  { id: 2, username: 'Eduardo', password: 'teste', firstName: 'Test', lastName: 'User'},
  { id: 3, username: 'Felipe', password: 'teste', firstName: 'Test', lastName: 'User'},
  { id: 4, username: 'Ligia', password: 'teste', firstName: 'Test', lastName: 'User'}
];


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body, params } = request;

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('/users/authenticate') && method === 'POST':
          return authenticate();
        case url.endsWith('/users') && method === 'GET':
          return getUsers();
        case url.endsWith('/users/search') && method === 'GET':
          return searchUsers();
        case url.endsWith('/users/throwError') && method === 'GET':
          return throwErrorsFromBackend();
        default:
          return next.handle(request);
      }
    }
   
    function authenticate() {
      const { username, password } = body;
      const user = users.find(x => x.username === username && x.password === password);
      if (!user) return error('Username or password is incorrect');

      return ok({
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        token: 'fake-jwt-token'
      });
    }

    function searchUsers() {
      let username = params.get('username');
      let result = users.find(x => x.username == username);
      let array = Array.isArray(result) ? result : new Array(result);
      return ok(array);
    }

    function throwErrorsFromBackend() {
      return throwError({ Errors: ['Login é obrigatório', 'Nome é obrigatório'], Type: 'UserException' });
    }

    function getUsers() {
      if(!isLoggedIn()) return unauthorized();
      return ok(users);
    }

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function error(message) {
      return throwError({ error: { message }});
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: 'Unauthorized' }});
    }

    function isLoggedIn() {
      return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }
  }
}

export let fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};