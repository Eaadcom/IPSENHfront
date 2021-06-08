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
  NbBadgeModule
} from '@nebular/theme';

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
    NbBadgeModule
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
    NbBadgeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {
}
