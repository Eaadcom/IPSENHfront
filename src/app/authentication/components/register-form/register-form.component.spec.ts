import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RegisterFormComponent} from './register-form.component';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {UserInterface} from '../../../user/interfaces/user-interface';
import {environment} from '../../../../environments/environment';
import {RegisterResponse} from '../../interface/register-response';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterFormComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule]
    })
      .compileComponents();

    httpMock = TestBed.inject(HttpTestingController);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should build an FormGroup on ngInit', () => {
    expect(component.registerForm).toBeInstanceOf(FormGroup);
  });

  it('should call onSubmit when form is submitted', () => {
    spyOn(component, 'onSubmit');

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', null);
    fixture.detectChanges();

    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('should have a valid registerForm', () => {
    const form = fixture.debugElement.query(By.css('form'));

    const registration = getUserRegistration();

    fillInForm(form, registration);

    expect(component.registerForm.valid).toBeTrue();
  });

  it('should have a inValid registerForm', () => {
    const form = fixture.debugElement.query(By.css('form'));

    const registration = getUserRegistration({
      date_of_birth: ''
    });

    fillInForm(form, registration);

    expect(component.registerForm.invalid).toBeTrue();
  });

  it('should preform a register attempt', () => {
    const form = fixture.debugElement.query(By.css('form'));

    const registration = getUserRegistration();

    fillInForm(form, registration);

    const req = httpMock.expectOne(environment.APIEndpoint + 'auth/register');
    expect(req.request.body).toEqual(registration);
  });

  it('should emit RegisterResponse when login attempt was successful', () => {
    const form = fixture.debugElement.query(By.css('form'));
    fixture.detectChanges();
    spyOn(component.register, 'emit');

    const registration = getUserRegistration();

    fillInForm(form, registration);

    const registerResponse = {
      api_token: 'token',
      user: {
        id: 'id',
        email: 'email',
      }
    } as unknown as RegisterResponse;


    httpMock.expectOne(environment.APIEndpoint + 'auth/register').flush(registerResponse);
    expect(component.register.emit).toHaveBeenCalledOnceWith(registerResponse);
  });

  it('should emit onLogin event when login attempt was successful', () => {
    const form = fixture.debugElement.query(By.css('form'));
    spyOn(component.register, 'emit');

    const registration = getUserRegistration();

    fillInForm(form, registration);

    httpMock.expectOne(environment.APIEndpoint + 'auth/register').flush({});
    expect(component.register.emit).toHaveBeenCalled();
  });


  const fillInForm = (form: DebugElement, userRegistration: any): void => {

    Object.keys(userRegistration).forEach((key: string) => {
      const elm = form.query(By.css(`input[name=${key}]`)).nativeElement;
      if (userRegistration[key] instanceof Date) {
        userRegistration[key] = (userRegistration[key] as Date).toISOString().substr(0, 10);
      }

      elm.value = userRegistration[key];
      elm.dispatchEvent(new Event('input'));
    });

    form.triggerEventHandler('submit', null);
    fixture.detectChanges();
  };

  const getUserRegistration = (override?: any): UserInterface => ({
    email: 'user@email.com',
    password: 'secret01',
    first_name: 'lorem ipsum',
    middle_name: 'lorem ipsum',
    last_name: 'lorem ipsum',
    gender: 'lorem ipsum',
    date_of_birth: new Date(),
    about_me: 'lorem ipsum',
    age_range_top: 25,
    age_range_bottom: 22,
    max_distance: 25,
    interest: 'lorem ipsum',
    ...override
  } as UserInterface);
});
