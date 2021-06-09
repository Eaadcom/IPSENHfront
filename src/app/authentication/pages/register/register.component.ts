import {Component} from '@angular/core';
import {NbRegisterComponent} from '@nebular/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent extends NbRegisterComponent {

  onFormSubmit(): void {
    this.register();
  }

  getOptions(): any {
    return this.options;
  }

}
