import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {NbDateFnsDateModule} from '@nebular/date-fns';
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
  NbActionsModule,
  NbBadgeModule, NbAlertModule, NbCheckboxModule, NbIconModule, NbDatepickerModule
} from '@nebular/theme';
import {NavigationComponent} from './components/navigation/navigation.component';
import {RouterModule} from '@angular/router';
import {ServerFeedbackMessageComponent} from './components/server-feedback-message/server-feedback-message.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    NbEvaIconsModule,
    NbAlertModule,
    NbCheckboxModule,
    NbIconModule,
    RouterModule,
    NbDialogModule.forRoot(),
    NbThemeModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDateFnsDateModule.forRoot({
      format: 'dd-MM-yyyy',
    }),
  ],
  exports: [
    ServerFeedbackMessageComponent,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    NbEvaIconsModule,
    NbAlertModule,
    NbCheckboxModule,
    NbIconModule,
    NbDialogModule,
    NbThemeModule,
    NbDatepickerModule,
    NbDateFnsDateModule,
    ServerFeedbackMessageComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    NavigationComponent,
    NavigationComponent,
    ServerFeedbackMessageComponent
  ]
})
export class SharedModule {
}
