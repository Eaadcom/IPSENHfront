import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialMatchInfoComponent } from './potential-match-info.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../../../environments/environment';
import {User} from '../../../user/models/user';
import {MatchModule} from '../../match.module';

describe('PotentialMatchInfoComponent', () => {
  let component: PotentialMatchInfoComponent;
  let fixture: ComponentFixture<PotentialMatchInfoComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [ PotentialMatchInfoComponent ],
      imports: [HttpClientTestingModule, MatchModule]
    })
      .compileComponents();

    httpMock = TestBed.inject(HttpTestingController);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotentialMatchInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pop the first item from the potential matches array', () => {
    component.potentialMatches = [1, 2];

    component.nextPotentialMatch();

    expect(component.potentialMatches === [2]);
  });

  it('should send a GET request on next potential match trigger', () => {
    const userId = 2;
    component.potentialMatches = [1, userId];

    component.nextPotentialMatch();

    const req = httpMock.expectOne(environment.APIEndpoint + `v1/user/${userId}`);
    expect(req.request.method).toBe('GET');
  });

  it('should return a string when queried for the match age', () => {

    component.currentPotentialMatch = new User(
      1, '', '', '', '', '', '',
      '', new Date(), '', 1, 2, 25, '', new Date(), new Date()
    );

    expect(component.getAgeOfPotentialMatch()).toEqual(jasmine.any(String));
  });

  it('next potential match method should be called', () => {
    const spy = spyOn(component, 'nextPotentialMatch');

    component.onButtonClick(true);

    expect(spy).toHaveBeenCalled();
  });
});
