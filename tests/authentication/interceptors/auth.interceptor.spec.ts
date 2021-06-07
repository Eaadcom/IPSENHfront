import {inject, TestBed} from '@angular/core/testing';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {AuthInterceptor} from '../../../src/app/authentication/interceptors/auth.interceptor';
import {AppTestingModule} from '../../app/app-testing.module';

describe('AuthInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule],
    });
    localStorage.clear();
  });

  xit('should not have a authorization header', inject([HttpClient, HttpTestingController],
    (http: HttpClient, mock: HttpTestingController) => {

      http.get('/api').subscribe(response => expect(response).toEqual({data: 'test'}));
      const mockRequest = mock.expectOne('/api');

      expect(mockRequest.request.headers.has('Authorization')).toBeFalse();
    }));

  xit('should have a authorization header', inject([HttpClient, HttpTestingController],
    (http: HttpClient, mock: HttpTestingController) => {

      localStorage.setItem('api_token', 'token');

      http.get('/api').subscribe(response => expect(response).toEqual({data: 'test'}));
      const mockRequest = mock.expectOne('/api');

      expect(mockRequest.request.headers.get('Authorization')).toEqual('Bearer token');
    }));

});
