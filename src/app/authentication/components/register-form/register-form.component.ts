import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {RegisterResponse} from '../../interface/register-response';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  @Output() register: EventEmitter<RegisterResponse>;
  readonly registerForm: FormGroup;

  constructor(private authenticationService: AuthenticationService) {
    this.registerForm = this.buildForm();
    this.register = new EventEmitter<RegisterResponse>();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.attemptUserRegistration();
    }
  }

  private buildForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      first_name: new FormControl(''),
      middle_name: new FormControl(''),
      last_name: new FormControl(''),
      gender: new FormControl(''),
      date_of_birth: new FormControl(''),
      about_me: new FormControl(''),
      age_range_bottom: new FormControl(''),
      age_range_top: new FormControl(''),
      max_distance: new FormControl(''),
      interest: new FormControl(''),
    });
  }

  private attemptUserRegistration(): void {
    this.authenticationService
      .register(this.registerForm.value)
      .subscribe(
        response => {
          this.register.emit(response);
        },
        error => {
          console.log('failed to register');
        }
      );
  }
}
