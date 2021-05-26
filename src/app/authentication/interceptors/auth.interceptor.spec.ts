import {inject, TestBed} from '@angular/core/testing';

import {AuthInterceptor} from './auth.interceptor';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';

describe('AuthInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      }]
    });
    localStorage.clear();
  });

  it('should not have a authorization header', inject([HttpClient, HttpTestingController],
    (http: HttpClient, mock: HttpTestingController) => {

      http.get('/api').subscribe(response => expect(response).toEqual({data: 'test'}));
      const mockRequest = mock.expectOne('/api');

      expect(mockRequest.request.headers.has('Authorization')).toBeFalse();
    }));

  it('should have a authorization header', inject([HttpClient, HttpTestingController],
    (http: HttpClient, mock: HttpTestingController) => {

      localStorage.setItem('api_token', 'token');

      http.get('/api').subscribe(response => expect(response).toEqual({data: 'test'}));
      const mockRequest = mock.expectOne('/api');

      expect(mockRequest.request.headers.get('Authorization')).toEqual('Bearer token');
    }));

});
