import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HttpTestingController} from '@angular/common/http/testing';
import {MatchButtonsComponent} from '../../../src/app/match/components/match-buttons/match-buttons.component';
import {MatchModule} from '../../../src/app/match/match.module';
import {AppTestingModule} from '../../app/app-testing.module';
import {LikeType} from '../../../src/app/match/interfaces/like-type';
import {User} from '../../../src/app/user/models/user';
import {environment} from '../../../src/environments/environment';

describe('MatchButtonsComponent', () => {
  let component: MatchButtonsComponent;
  let fixture: ComponentFixture<MatchButtonsComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchButtonsComponent],
      imports: [AppTestingModule, MatchModule]
    })
      .compileComponents();

    httpMock = TestBed.inject(HttpTestingController);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit false on click', () => {
    spyOn(component.buttonClick, 'emit');

    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));

    expect(component.buttonClick.emit).toHaveBeenCalledWith(false);
  });

  it('should emit true on click', () => {
    spyOn(component.buttonClick, 'emit');

    component.currentPotentialMatch = new User(
      0, '', '', '', '', '', '',
      '', new Date(), '', 1, 2, 25, '', new Date(), new Date()
    );

    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));

    expect(component.buttonClick.emit).toHaveBeenCalledWith(true);
  });

  it('should send POST request', () => {

    component.currentPotentialMatch = new User(
      1, '', '', '', '', '', '',
      '', new Date(), '', 1, 2, 25, '', new Date(), new Date()
    );

    component.onLike(LikeType.SUPERLIKE);

    const req = httpMock.expectOne(environment.APIEndpoint + 'v1/like');
    expect(req.request.method).toBe('POST');
  });
});
