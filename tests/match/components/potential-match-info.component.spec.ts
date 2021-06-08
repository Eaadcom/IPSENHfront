import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HttpTestingController} from '@angular/common/http/testing';
import {PotentialMatchInfoComponent} from '../../../src/app/match/components/potential-match-info/potential-match-info.component';
import {MatchModule} from '../../../src/app/match/match.module';
import {environment} from '../../../src/environments/environment';
import {User} from '../../../src/app/user/models/user';
import {AppTestingModule} from '../../app/app-testing.module';

describe('PotentialMatchInfoComponent', () => {
  let component: PotentialMatchInfoComponent;
  let fixture: ComponentFixture<PotentialMatchInfoComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PotentialMatchInfoComponent],
      imports: [AppTestingModule, MatchModule]
    })
      .compileComponents();

    httpMock = TestBed.inject(HttpTestingController);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotentialMatchInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should pop the first item from the potential matches array', () => {
    component.potentialMatches = [1, 2];

    component.nextPotentialMatch();

    expect(component.potentialMatches === [2]);
  });

  xit('should send a GET request on next potential match trigger', () => {
    const userId = 2;
    component.potentialMatches = [1, userId];

    component.nextPotentialMatch();

    const req = httpMock.expectOne(environment.APIEndpoint + `v1/user/${userId}`);
    expect(req.request.method).toBe('GET');
  });

  xit('next potential match method should be called', () => {
    const spy = spyOn(component, 'nextPotentialMatch');

    component.onButtonClick(true);

    expect(spy).toHaveBeenCalled();
  });
});
