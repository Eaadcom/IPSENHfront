import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfilePageComponent} from '../../../src/app/user/pages/profile-page/profile-page.component';
import {ActivatedRoute} from '@angular/router';
import {AppTestingModule} from '../../app/app-testing.module';
import {UserModule} from '../../../src/app/user/user.module';
import {User} from '../../../src/app/user/models/user';

describe('ProfilePageComponent', () => {
  let component: ProfilePageComponent;
  let fixture: ComponentFixture<ProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePageComponent ],
      imports: [AppTestingModule, UserModule],
      providers: [
        {provide: ActivatedRoute, useValue: {
            snapshot: {
              data: {
                codesnippets: [],
                authUser: new User()
              }
            }
          }
        },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
