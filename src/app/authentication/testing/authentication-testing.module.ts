import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NbAuthModule, NbDummyAuthStrategy, NbPasswordAuthStrategy, NbTokenLocalStorage, NbTokenStorage} from '@nebular/auth';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../interceptors/auth.interceptor';

@NgModule({
  declarations: [],
  imports: [
    NbAuthModule.forRoot({
      strategies: [
        NbDummyAuthStrategy.setup({
          name: 'testing',
          delay: 0,
          alwaysFail: false,
        })
      ]
    }),
  ],
  exports: [
    NbAuthModule
  ],
  providers:
    [
      {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
      {provide: NbTokenStorage, useClass: NbTokenLocalStorage},
    ],
})

export class AuthenticationTestingModule {
}
