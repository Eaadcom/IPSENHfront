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

  fetch(): void {
    this.get().subscribe( obs => {
      console.log(obs);
    }, error => {
      console.log(error);
    });
  }

  constructor(private httpClient: HttpClient) {
  }

  get<T>(): Observable<T> {
    return this.httpClient.get<T>('localhost:8080');
  }
}
