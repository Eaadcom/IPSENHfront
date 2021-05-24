import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginFormComponent} from './components/login-form/login-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';


@NgModule({
  declarations: [
    LoginFormComponent,
    LoginPageComponent,
    RegisterPageComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule {
}
