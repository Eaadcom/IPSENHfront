import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NbTokenStorage} from '@nebular/auth';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authenticationService: NbTokenStorage ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const apiToken = this.authenticationService.get().toString();

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
