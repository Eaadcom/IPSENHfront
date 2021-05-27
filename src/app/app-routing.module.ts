import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginFormComponent} from './authentication/components/login-form/login-form.component';
import {RegisterPageComponent} from './authentication/pages/register-page/register-page.component';
import {LoginPageComponent} from './authentication/pages/login-page/login-page.component';
import {ContentComponent} from './codesnippet/components/content/content.component';
import {IsAuthenticatedGuard} from './authentication/guards/is-authenticated.guard';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'codesnippet', component: ContentComponent, canActivate: [IsAuthenticatedGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
