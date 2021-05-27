import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginFormComponent} from './authentication/components/login-form/login-form.component';
import {RegisterPageComponent} from './authentication/pages/register-page/register-page.component';
import {LoginPageComponent} from './authentication/pages/login-page/login-page.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
