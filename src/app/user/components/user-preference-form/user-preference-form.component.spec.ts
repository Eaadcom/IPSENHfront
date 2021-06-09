import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPreferenceFormComponent } from './user-preference-form.component';

describe('UserPreferenceFormComponent', () => {
  let component: UserPreferenceFormComponent;
  let fixture: ComponentFixture<UserPreferenceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPreferenceFormComponent ]
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
