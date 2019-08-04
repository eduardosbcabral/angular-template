import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ExceptionInterceptor implements HttpInterceptor {
  
  constructor(private toastr: ToastrService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      const errors = err.Errors;
      const exceptionType = err.Type;
      this.showErrors(errors, exceptionType);

      return new Observable<HttpEvent<any>>();
    }));
  }

  showErrors = (errors: [], type: any) => {
    errors.forEach(error => {
      this.toastr.error(error, type, { positionClass: 'toast-top-right' })
    });
  }
}