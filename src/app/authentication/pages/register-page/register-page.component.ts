import {Component, OnInit} from '@angular/core';
import {RegisterResponse} from '../../interface/register-response';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onRegister($event: RegisterResponse): void {
    console.log('user registered');
  }
}
