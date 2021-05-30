import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './authentication/interceptors/auth.interceptor';
import {AuthenticationModule} from './authentication/authentication.module';
import { MatchPageComponent } from './match/pages/match-page/match-page.component';
import { PotentialMatchInfoComponent } from './match/components/potential-match-info/potential-match-info.component';
import { MatchButtonsComponent } from './match/components/match-buttons/match-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchPageComponent,
    PotentialMatchInfoComponent,
    MatchButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, PotentialMatchInfoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
