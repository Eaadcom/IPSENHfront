import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserEditFormComponent} from '../../../src/app/user/components/user-edit-form/user-edit-form.component';
import {AppTestingModule} from '../../app/app-testing.module';
import {UserModule} from '../../../src/app/user/user.module';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../src/app/user/models/user';

describe('UserEditFormComponent', () => {
  let component: UserEditFormComponent;
  let fixture: ComponentFixture<UserEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
