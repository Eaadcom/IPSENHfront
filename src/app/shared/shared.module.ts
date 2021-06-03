import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  NbCardModule,
  NbChatModule,
  NbDialogModule,
  NbListModule,
  NbThemeModule,
  NbUserModule
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {
}
