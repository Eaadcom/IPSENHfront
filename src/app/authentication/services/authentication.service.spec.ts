import {TestBed} from '@angular/core/testing';

import {AuthenticationService} from './authentication.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../../environments/environment';
import {Credentials} from '../interface/credentials';
import {UserInterface} from '../../user/interfaces/user-interface';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AuthenticationService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should execute POST request when logging in', () => {

    const credentials = {
      email: 'user@example.com',
      password: 'secret',
    } as Credentials;

    service.login(credentials).subscribe();

    const req = httpMock.expectOne(environment.APIEndpoint + 'auth/login');
    expect(req.request.method).toBe('POST');
  });

  it('should send the credentials', () => {

    const credentials = {
      email: 'user@example.com',
      password: 'secret',
    } as Credentials;

    service.login(credentials).subscribe();

    const req = httpMock.expectOne(environment.APIEndpoint + 'auth/login');
    expect(req.request.body).toBe(credentials);
  });

  it('should execute Post when registering', () => {

    const user = {} as UserInterface;

    service.login(user).subscribe();

    const req = httpMock.expectOne(environment.APIEndpoint + 'auth/login');
    expect(req.request.method).toBe('POST');
  });

});
