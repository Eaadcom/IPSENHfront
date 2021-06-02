import {NgModule} from '@angular/core';

import {LoginFormComponent} from './components/login-form/login-form.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    LoginFormComponent,
    LoginPageComponent,
    RegisterPageComponent,
    RegisterFormComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
  ],
})
export class AuthenticationModule {
}
