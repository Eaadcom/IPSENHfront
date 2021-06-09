import {NgModule} from '@angular/core';
import {environment} from '../../environments/environment';

import {NbEvaIconsModule} from '@nebular/eva-icons';
import {NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy} from '@nebular/auth';
import {AuthenticationRoutingModule} from './authentication-routing.module';
import {RegisterComponent} from './pages/register/register.component';

import {SharedModule} from '../shared/shared.module';
import {CustomNbAuthComponent} from './components/custom-nb-auth/custom-nb-auth.component';
import {UserModule} from '../user/user.module';

@NgModule({
  declarations: [
    RegisterComponent,
    CustomNbAuthComponent
  ],
  imports: [
    AuthenticationRoutingModule,
    SharedModule,
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
            endpoint: environment.APIRoutes.auth.logout,
            redirect: {
              success: '/chat',
            },
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
        },
        validation: {
          firstName: {
            minLength: 3,
            maxLength: 255,
          },
          lastName: {
            minLength: 3,
            maxLength: 255,
          },
          dateOfBirth: {
            required: true,
          },
          aboutMe: {
            maxLength: 1000,
          }
        }
      },
    }),
    UserModule,
  ],
  exports: [
    NbEvaIconsModule,
    NbAuthModule,
  ]
})
export class AuthenticationModule {
}
