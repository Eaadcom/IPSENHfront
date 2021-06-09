import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  NbLoginComponent,
  NbLogoutComponent,
} from '@nebular/auth';
import {RegisterComponent} from './pages/register/register.component';
import {CustomNbAuthComponent} from './components/custom-nb-auth/custom-nb-auth.component';
import {IsNotAuthenticatedGuard} from './guards/is-not-authenticated.guard';

const routes: Routes = [
  {
    path: 'auth',
    component: CustomNbAuthComponent,
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
