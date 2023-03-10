import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.authService.isAuthenticated.subscribe((isAuth: boolean) => {
      if (isAuth) {
        this.authService.token.subscribe((token: string) => {
          request = request.clone({
            headers: request.headers.set('Authorization', token)
          });
        });
      }
    })
    return next.handle(request);
  }
}
