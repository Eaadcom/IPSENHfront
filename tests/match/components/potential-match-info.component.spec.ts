import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HttpTestingController} from '@angular/common/http/testing';
import {PotentialMatchInfoComponent} from '../../../src/app/match/components/potential-match-info/potential-match-info.component';
import {MatchModule} from '../../../src/app/match/match.module';
import {environment} from '../../../src/environments/environment';
import {AppTestingModule} from '../../app/app-testing.module';
import {User} from '../../../src/app/user/models/user';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return first letter of name', () => {

    component.currentPotentialMatch = new User(
      1, '', '', '', 'Ashna', '', '',
      '', new Date(), '', 1, 2, 25, '', new Date(), new Date()
    );

    const output = component.getFirstLetterOfPotentialMatchName();

    expect(output).toBe('A');
  });

  it('should pop the first item from the potential matches array', () => {
    component.potentialMatches = [1, 2];

    component.nextPotentialMatch();

    expect(component.potentialMatches).toEqual([2]);
  });

  it('should send a GET request on next potential match trigger', () => {
    const userId = 2;
    component.potentialMatches = [1, userId];

    component.nextPotentialMatch();

    const req = httpMock.expectOne(environment.APIEndpoint + `v1/user/${userId}`);
    expect(req.request.method).toBe('GET');
  });

  it('next potential match method should be called', () => {
    const spy = spyOn(component, 'nextPotentialMatch');

    component.onButtonClick(true);

    expect(spy).toHaveBeenCalled();
  });
});
