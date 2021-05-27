import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../services/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const apiToken = this.authenticationService.getApiToken();

    if (apiToken != null) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${apiToken}`
        }
      });
    }

    return next.handle(request);
  }
}
