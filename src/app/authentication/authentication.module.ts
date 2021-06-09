import {NgModule} from '@angular/core';
import {environment} from '../../environments/environment';

import {NbEvaIconsModule} from '@nebular/eva-icons';
import {NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy} from '@nebular/auth';
import {AuthenticationRoutingModule} from './authentication-routing.module';


@NgModule({
  imports: [
    AuthenticationRoutingModule,
    NbEvaIconsModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: environment.APIEndpoint,
          login: {
            method: 'post',
            redirect: {
              success: '/chat',
              failure: 'auth/login',
            },
            endpoint: environment.APIRoutes.auth.login
          },
          register: {
            method: 'post',
            endpoint: environment.APIRoutes.auth.register
          },
          logout: {
            method: 'post',
            endpoint: environment.APIRoutes.auth.logout
          },
          token: {
            class: NbAuthJWTToken,
            key: 'token', // this parameter tells where to look for the token
          }
        }),
      ],
      forms: {
        login: {
          redirectDelay: 0
        },
        register: {
          redirectDelay: 0
        },
        logout: {
          redirectDelay: 0
        }
      },
    }),
  ],
  exports: [
    NbEvaIconsModule,
    NbAuthModule,
  ],
  providers: []
})
export class AuthenticationModule {
}
