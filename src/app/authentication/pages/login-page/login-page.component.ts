import { Component, OnInit } from '@angular/core';
import {LoginResponse} from '../../interface/login-response';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onLogin($event: LoginResponse) {

  }
}
