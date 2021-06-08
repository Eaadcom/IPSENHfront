import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {CodesnippetModule} from '../codesnippet/codesnippet.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    CodesnippetModule,
    SharedModule
  ],
  exports: [
    CodesnippetModule
  ],
})
export class UserModule {
}
