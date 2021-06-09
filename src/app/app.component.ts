import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NbAuthJWTToken, NbAuthService, NbAuthToken} from '@nebular/auth';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean;
  authSubscription: Subscription;

  constructor(private httpClient: HttpClient,
              public nbAuthService: NbAuthService) {
    this.isAuthenticated = false;
    this.authSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.listenIfAuthenticated();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  listenIfAuthenticated(): void {
    this.authSubscription = this.nbAuthService.onTokenChange()
      .subscribe(token => {
        this.isAuthenticated = this.checkIfAuthenticated(token);
      });
  }

  checkIfAuthenticated(token: NbAuthToken): boolean {
    return token instanceof NbAuthJWTToken && token.isValid();
  }
}


