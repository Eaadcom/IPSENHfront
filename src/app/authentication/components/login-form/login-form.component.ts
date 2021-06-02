import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {LoginResponse} from '../../interface/login-response';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output() login: EventEmitter<LoginResponse>;
  loginForm: FormGroup;
  hide: boolean;

  constructor(private authenticationService: AuthenticationService) {
    this.login = new EventEmitter<LoginResponse>();
    this.loginForm = this.buildLoginForm();
    this.hide = true;
  }

  ngOnInit(): void {
    this.buildLoginForm();
  }

  buildLoginForm(): FormGroup {
    return new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.minLength(8)),
    });
  }

  onSubmit(): void {
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      this.attemptUserLogin();
    }
  }

  private attemptUserLogin(): void {
    this.authenticationService
      .login(this.loginForm.value)
      .subscribe(
        value => {
          this.login.emit(value);
        },
        error => {
          console.log('failed to login user');
        });
  }
}
