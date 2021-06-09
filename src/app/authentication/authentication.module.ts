import {NgModule} from '@angular/core';
import {environment} from '../../environments/environment';

import {NbEvaIconsModule} from '@nebular/eva-icons';
import {NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy} from '@nebular/auth';
import {AuthenticationRoutingModule} from './authentication-routing.module';
import {RegisterComponent} from './pages/register/register.component';

import {NbAlertModule, NbCheckboxModule, NbDatepickerModule, NbIconModule} from '@nebular/theme';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {NbDateFnsDateModule} from '@nebular/date-fns';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    AuthenticationRoutingModule,
    FormsModule,
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
        },
        validation: {
          firstName: {
            minLength: 3,
            maxLength: 2555
          },
          lastName: {
            minLength: 3,
            maxLength: 2555
          }
        }
      },
    }),
    NbAlertModule,
    SharedModule,
    NbCheckboxModule,
    NbIconModule,
    NbDateFnsDateModule,
    NbDatepickerModule,
  ],
  exports: [
    NbEvaIconsModule,
    NbAuthModule,
  ]})
export class AuthenticationModule {
}
