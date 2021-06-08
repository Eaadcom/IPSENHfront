import {Component, OnInit} from '@angular/core';
import {NB_AUTH_OPTIONS, NbRegisterComponent} from '@nebular/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent extends NbRegisterComponent {


  _register(): void{
    console.log(this.user);
    this.register();
  }
}
