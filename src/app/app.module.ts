import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './authentication/interceptors/auth.interceptor';
import {AuthenticationModule} from './authentication/authentication.module';
import {ChatModule} from './chat/chat.module';
import {CodesnippetModule} from './codesnippet/codesnippet.module';
import {MatchModule} from './match/match.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NbTokenLocalStorage, NbTokenStorage} from '@nebular/auth';
import {SharedModule} from './shared/shared.module';
import {NbDatepickerModule, NbLayoutModule} from '@nebular/theme';
import {NbDateFnsDateModule} from '@nebular/date-fns';
import {UserModule} from './user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    AppRoutingModule,
    HttpClientModule,
    ChatModule,
    MatchModule,
    UserModule,
    CodesnippetModule,
    ReactiveFormsModule,
    CodesnippetModule,
    NbLayoutModule,
    SharedModule,
    NbDateFnsDateModule.forRoot({
      format: 'dd-MM-yyyy',
    }),
    NbDatepickerModule.forRoot(),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: NbTokenStorage, useClass: NbTokenLocalStorage},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
