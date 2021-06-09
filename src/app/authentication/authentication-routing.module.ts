import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
} from '@nebular/auth';
import {IsNotAuthenticatedGuard} from './guards/is-not-authenticated.guard';
import {RegisterComponent} from './pages/register/register.component';

const routes: Routes = [
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
        canActivate: [IsNotAuthenticatedGuard],
      },
      {
        path: 'login',
        component: NbLoginComponent,
        canActivate: [IsNotAuthenticatedGuard],
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [IsNotAuthenticatedGuard],
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {
}
