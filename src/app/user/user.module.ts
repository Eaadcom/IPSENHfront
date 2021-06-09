import {NgModule} from '@angular/core';

import {UserRegisterFormComponent} from './components/user-register-form/user-register-form.component';
import {UserEditFormComponent} from './components/user-edit-form/user-edit-form.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {NbLayoutModule, NbSidebarModule, NbTabsetModule} from '@nebular/theme';
import {CodesnippetModule} from '../codesnippet/codesnippet.module';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import { UserPreferenceFormComponent } from './components/user-preference-form/user-preference-form.component';

@NgModule({
  declarations: [
    ProfilePageComponent,
    UserRegisterFormComponent,
    UserEditFormComponent,
    UserPreferenceFormComponent
  ],
  imports: [
    CommonModule,
    CodesnippetModule,
    SharedModule,
    NbSidebarModule,
    NbLayoutModule,
    NbTabsetModule,
  ],
  exports: [
    CodesnippetModule,
    UserRegisterFormComponent
  ],
})
export class UserModule {
}
