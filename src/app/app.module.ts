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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {NbLayoutModule} from '@nebular/theme';

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
    CodesnippetModule,
    MatchModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CodesnippetModule,
    NbLayoutModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
