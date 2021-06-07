import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LikeMatchListComponent} from './like-match-list.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import {By} from '@angular/platform-browser';
import {ChatModule} from '../../chat.module';
import {SharedModule} from '../../../shared/shared.module';
import {RouterTestingModule} from '@angular/router/testing';
import {LikeMatchResponse} from '../../models/like-match-response.model';
import {AuthenticationService} from '../../../authentication/services/authentication.service';
import {User} from '../../../user/models/user';
import {MessageResponse} from '../../models/message-response.model';
import {LikeMatchService} from '../../services/like-match.service';

describe('LikeMatchListComponent', () => {
  let component: LikeMatchListComponent;
  let fixture: ComponentFixture<LikeMatchListComponent>;
  let echo: Echo;
  let pusher: Pusher;
  let likeMatch: LikeMatchResponse;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeMatchListComponent ],
      imports: [HttpClientTestingModule, ChatModule, SharedModule, RouterTestingModule],
      providers: [AuthenticationService, LikeMatchService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeMatchListComponent);
    component = fixture.componentInstance;

    pusher = new Pusher('2649bb334eb27f74faf8');
    echo = new Echo({
      broadcaster: 'pusher',
      key: '2649bb334eb27f74faf8',
      cluster: 'eu',
      forceTLS: true
    });
    likeMatch = new LikeMatchResponse('1', new Date(), new Date(), [],
      new User(1, '', '', '', 'Test', '',
        '', '', new Date(), '', 1, 1,
        1, '', new Date(), new Date()), false);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject authService instance of AuthenticationService', () => {
    const authService = TestBed.get(AuthenticationService);

    expect(authService).toBeInstanceOf(AuthenticationService);
  });

  it('should inject likeMatchService instance of LikeMatchService', () => {
    const likeMatchService = TestBed.get(LikeMatchService);

    expect(likeMatchService).toBeInstanceOf(LikeMatchService);
  });

  it('should create an Echo object on ngInit', () => {
    expect(component.echo).toBeInstanceOf(Echo);
  });

  it('should create a Pusher object ngInit', () => {
    expect(component.pusher).toBeInstanceOf(Pusher);
  });

  it('should contain a nb-card in the html', () => {
    const card = fixture.debugElement.query(By.css('nb-card'));

    expect(card).toBeTruthy();
  });

  it('should contain a nb-list in the html', () => {
    const list = fixture.debugElement.query(By.css('nb-list'));

    expect(list).toBeTruthy();
  });

  it('should contain a nb-list-item if there are likeMatches present', () => {
    component.likeMatches = [new LikeMatchResponse()];
    fixture.detectChanges();

    const listItem = fixture.debugElement.query(By.css('nb-list-item'));

    expect(listItem).toBeTruthy();
  });

  it('should not contain nb-list-items if there are no likeMatches present', () => {
    component.likeMatches = [];
    fixture.detectChanges();

    const listItem = fixture.debugElement.query(By.css('nb-list-item'));

    expect(listItem).toBeFalsy();
  });

  it('should subscribe to channels on NgInit', () => {
    spyOn(component, 'subscribeToChannels');
    fixture.detectChanges();

    expect(component.subscribeToChannels).toHaveBeenCalled();
  });

  it('should unsubscribe to channels on NgDestroy', () => {
    spyOn(component, 'unsubscribingToChannels');
    fixture.detectChanges();

    component.ngOnDestroy();

    expect(component.unsubscribingToChannels).toHaveBeenCalled();
  });

  it('should return the name of matched user of LikeMatch when calling getNameOfLikeMatchUser', () => {
    const resultName = component.getNameOfLikeMatchUser(likeMatch);

    expect(resultName).toEqual('Test');
  });

  it('should call getNameOfLikeMatchUser if there is a likeMatch present', () => {
    spyOn(component, 'getNameOfLikeMatchUser');
    component.likeMatches = [likeMatch];
    fixture.detectChanges();

    expect(component.getNameOfLikeMatchUser).toHaveBeenCalled();
  });

  it('nb list item should display the name of the likeMatch as text', () => {
    component.likeMatches = [likeMatch];
    fixture.detectChanges();

    const listItem = fixture.debugElement.query(By.css('nb-list-item'));

    expect(listItem.nativeElement.textContent.trim()).toBe('Test');
  });

  it('should contain a nb-badge element in the html if the likeMatch showNotification is true', () => {
    likeMatch.showNotification = true;
    component.likeMatches = [likeMatch];
    fixture.detectChanges();

    const badge = fixture.debugElement.query(By.css('nb-badge'));

    expect(badge).toBeTruthy();
    expect(badge.nativeElement.textContent.trim()).toBe('new');
  });

  it('nb-badge should contain the correct attributes when shown', () => {
    likeMatch.showNotification = true;
    component.likeMatches = [likeMatch];
    fixture.detectChanges();

    const badge = fixture.debugElement.query(By.css('nb-badge'));

    expect(badge.nativeElement.getAttribute('ng-reflect-text')).toBe('new');
    expect(badge.nativeElement.getAttribute('ng-reflect-position')).toBe('center right');
  });

  it('should not contain a nb-badge element in the html if the likeMatch showNotification is false', () => {
    component.likeMatches = [likeMatch];
    fixture.detectChanges();

    const badge = fixture.debugElement.query(By.css('nb-badge'));

    expect(badge).toBeFalsy();
  });

  it('should add messages to LikeMatchResponse array when calling addMessageToChat', () => {
    component.showLikeMatch = likeMatch;
    const messageText = 'test';
    const message = new MessageResponse('1', '1', messageText);
    component.addMessageToChat(component.showLikeMatch, message);
    fixture.detectChanges();

    expect(component.showLikeMatch.messages).toHaveSize(1);
    expect(component.showLikeMatch.messages).toContain({
      content: messageText,
      created_at: undefined,
      is_sender: false
    });
  });

  it('should only call showMessagesOfLikeMatch when button is clicked', () => {
    spyOn(component, 'showMessagesOfLikeMatch');
    component.likeMatches = [likeMatch];
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('nb-list-item'));
    buttonElement.nativeElement.dispatchEvent(new Event('click'));

    expect(component.showMessagesOfLikeMatch).toHaveBeenCalled();
  });

  it('should set showLikeMatch when clicking on a like match with showMessagesOfLikeMatch', () => {
    component.likeMatches = [likeMatch];
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('nb-list-item'));
    buttonElement.nativeElement.dispatchEvent(new Event('click'));

    expect(component.showLikeMatch).toBeInstanceOf(LikeMatchResponse);
  });

  it('object showLikeMatch should be of Object instance when no LikeMatch is in the array', () => {
    component.likeMatches = [{}];
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('nb-list-item'));
    buttonElement.nativeElement.dispatchEvent(new Event('click'));

    expect(component.showLikeMatch).toBeInstanceOf(Object);
  });
});
