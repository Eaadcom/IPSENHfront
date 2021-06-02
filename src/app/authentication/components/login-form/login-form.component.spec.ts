import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginFormComponent} from './login-form.component';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Credentials} from '../../interface/credentials';
import {LoginResponse} from '../../interface/login-response';
import {SharedModule} from '../../../shared/shared.module';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, SharedModule]
    })
      .compileComponents();

    httpMock = TestBed.inject(HttpTestingController);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should build an FormGroup on ngInit', () => {
    expect(component.loginForm).toBeInstanceOf(FormGroup);
  });

  it('should build an FormGroup on ngInit', () => {
    expect(component.loginForm).toBeInstanceOf(FormGroup);
  });

  it('should only call onSubmit when form is submitted', () => {
    spyOn(component, 'onSubmit');

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', null);
    fixture.detectChanges();

    expect(component.onSubmit).toHaveBeenCalled();

  });

  it('should have a valid loginForm', () => {
    const form = fixture.debugElement.query(By.css('form'));

    const credentials = {
      email: 'user@gmail.com',
      password: 'secret01',
    };

    fillInFormToBeValid(form, credentials);

    expect(component.loginForm.valid).toBeTrue();
  });

  it('should have a inValid loginForm', () => {
    const form = fixture.debugElement.query(By.css('form'));

    const credentials = {
      email: 'user@gmail.com',
      password: 'secret',
    };

    fillInFormToBeValid(form, credentials);

    expect(component.loginForm.invalid).toBeTrue();
  });

  it('should preform a login attempt', () => {
    const form = fixture.debugElement.query(By.css('form'));

    const credentials = {
      email: 'user@gmail.com',
      password: 'secret01',
    };

    fillInFormToBeValid(form, credentials);

    const req = httpMock.expectOne(environment.APIEndpoint + 'auth/login');
    expect(req.request.body).toEqual(credentials);
  });

  it('should emit LoginResponse when login attempt was successful', () => {
    const form = fixture.debugElement.query(By.css('form'));
    fixture.detectChanges();
    spyOn(component.login, 'emit');

    const credentials = {
      email: 'user@gmail.com',
      password: 'secret01',
    };

    const loginResponse = {
      api_token: 'token',
      user: {
        id: 'id',
        email: 'email',
      }
    } as unknown as LoginResponse;

    fillInFormToBeValid(form, credentials);

    httpMock.expectOne(environment.APIEndpoint + 'auth/login').flush(loginResponse);
    expect(component.login.emit).toHaveBeenCalledOnceWith(loginResponse);
  });

  it('should emit onLogin event when login attempt was successful', () => {
    const form = fixture.debugElement.query(By.css('form'));
    fixture.detectChanges();
    spyOn(component.login, 'emit');

    const credentials = {
      email: 'user@gmail.com',
      password: 'secret01',
    };

    fillInFormToBeValid(form, credentials);

    httpMock.expectOne(environment.APIEndpoint + 'auth/login').flush({});
    expect(component.login.emit).toHaveBeenCalled();
  });


  const fillInFormToBeValid = (form: DebugElement, credentials: Credentials): void => {
    const email = form.query(By.css('input[name=email]'));
    const password = form.query(By.css('input[name=password]'));

    email.nativeElement.value = credentials.email;
    password.nativeElement.value = credentials.password;
    email.nativeElement.dispatchEvent(new Event('input'));
    password.nativeElement.dispatchEvent(new Event('input'));

    form.triggerEventHandler('submit', null);
    fixture.detectChanges();
  };

});
