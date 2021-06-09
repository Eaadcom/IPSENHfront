import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  NbButtonGroupModule,
  NbButtonModule,
  NbCardModule,
  NbChatModule,
  NbDialogModule,
  NbInputModule,
  NbListModule,
  NbSelectModule,
  NbThemeModule,
  NbUserModule,
  NbBadgeModule,
  NbActionsModule,
  NbIconModule
} from '@nebular/theme';
import {NavigationComponent} from './components/navigation/navigation.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    NbDialogModule.forRoot(),
    NbThemeModule.forRoot(),
    NbCardModule,
    NbListModule,
    NbUserModule,
    NbChatModule,
    NbInputModule,
    NbSelectModule,
    NbButtonModule,
    NbButtonGroupModule,
    NbBadgeModule,
    NbActionsModule,
    NbCardModule,
    NbIconModule,
    RouterModule
  ],
  exports: [
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    NbDialogModule,
    NbThemeModule,
    NbCardModule,
    NbListModule,
    NbUserModule,
    NbChatModule,
    NbInputModule,
    NbSelectModule,
    NbButtonModule,
    NbButtonGroupModule,
    NbBadgeModule,
    NavigationComponent,
    NavigationComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    NavigationComponent,
    NavigationComponent
  ]
})
export class SharedModule {
}
