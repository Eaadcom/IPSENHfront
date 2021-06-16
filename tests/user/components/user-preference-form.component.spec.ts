import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPreferenceFormComponent } from '../../../src/app/user/components/user-preference-form/user-preference-form.component';
import {AppTestingModule} from '../../app/app-testing.module';
import {UserModule} from '../../../src/app/user/user.module';

describe('UserPreferenceFormComponent', () => {
  let component: UserPreferenceFormComponent;
  let fixture: ComponentFixture<UserPreferenceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPreferenceFormComponent ],
      imports: [AppTestingModule, UserModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPreferenceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
