import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ipsenh-frontend';

  constructor(private httpClient: HttpClient) {}

  fetch(): void {
    this.get().subscribe(obs => {
      console.log(obs);
    }, error => {
      console.log(error);
    });
  }

  get<T>(): Observable<T> {
    return this.httpClient.get<T>('staging.groep-7.xyz:8003');
  }
}


