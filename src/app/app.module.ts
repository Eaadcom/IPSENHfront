import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './authentication/interceptors/auth.interceptor';
import {AuthenticationModule} from './authentication/authentication.module';
import { PotentialMatchInfoComponent } from './match/components/potential-match-info/potential-match-info.component';
import { MatchButtonsComponent } from './match/components/match-buttons/match-buttons.component';
import {MatchPageComponent} from './match/pages/match-page/match-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PotentialMatchInfoComponent,
    MatchButtonsComponent,
    MatchPageComponent,
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
