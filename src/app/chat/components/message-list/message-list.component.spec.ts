import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageListComponent } from './message-list.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ChatModule} from '../../chat.module';
import {SharedModule} from '../../../shared/shared.module';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthenticationService} from '../../../authentication/services/authentication.service';
import {MessageService} from '../../services/message.service';
import {LikeMatchResponse} from '../../models/like-match-response.model';
import {By} from '@angular/platform-browser';
import {MessageResponse} from '../../models/message-response.model';
import {User} from '../../../user/models/user';
import {Message} from '../../models/message.model';

describe('MessageListComponent', () => {
  let component: MessageListComponent;
  let fixture: ComponentFixture<MessageListComponent>;
  let likeMatch: LikeMatchResponse;
  let message: MessageResponse;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageListComponent],
      imports: [HttpClientTestingModule, ChatModule, SharedModule, RouterTestingModule],
      providers: [AuthenticationService, MessageService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    likeMatch = new LikeMatchResponse('1', new Date(), new Date(), [],
      new User(1, '', '', '', 'Ashna',
        '', '', '', new Date(), '',
        1, 1, 1, '', new Date(), new Date()));
    message = new MessageResponse('1', '1', 'test', true, new Date());

    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject authService instance of AuthenticationService', () => {
    const authService = TestBed.get(AuthenticationService);

    expect(authService).toBeInstanceOf(AuthenticationService);
  });

  it('should inject messageService instance of MessageService', () => {
    const messageService = TestBed.get(MessageService);

    expect(messageService).toBeInstanceOf(MessageService);
  });

  it('should contain a nb-chat in the html', () => {
    const chat = fixture.debugElement.query(By.css('nb-chat'));

    expect(chat).toBeTruthy();
  });

  it('should contain a nb-chat-form in the html', () => {
    const chatForm = fixture.debugElement.query(By.css('nb-chat-form'));

    expect(chatForm).toBeTruthy();
  });

  it('should contain a nb-chat-message if there are messages present', () => {
    likeMatch.messages?.push(message);
    component.likeMatch = likeMatch;
    fixture.detectChanges();

    const chatMessage = fixture.debugElement.query(By.css('nb-chat-message'));

    expect(chatMessage).toBeTruthy();
  });

  it('should not contain a nb-chat-message if there are no messages present', () => {
    component.likeMatch = likeMatch;
    fixture.detectChanges();

    const chatMessage = fixture.debugElement.query(By.css('nb-chat-message'));

    expect(chatMessage).toBeFalsy();
  });

  it('should call getChatTitleName', () => {
    spyOn(component, 'getChatTitleName');
    fixture.detectChanges();

    expect(component.getChatTitleName).toHaveBeenCalled();
  });

  it('should display the matched user name as chat title if there is a like match selected', () => {
    const expectName = 'Chatting with Ashna';
    component.likeMatch = likeMatch;
    fixture.detectChanges();

    const chatTitle = fixture.debugElement.query(By.css('nb-chat'));

    expect(chatTitle.nativeElement.getAttribute('ng-reflect-title')).toBe(expectName);
  });

  it('should display open a chat as title if there is no like match selected', () => {
    const expectName = 'Open a chat';

    const chatTitle = fixture.debugElement.query(By.css('nb-chat'));

    expect(chatTitle.nativeElement.getAttribute('ng-reflect-title')).toBe(expectName);
  });

  it('nb-chat-message should contain the correct attributes when shown', () => {
    likeMatch.messages?.push(message);
    component.likeMatch = likeMatch;
    fixture.detectChanges();

    const chatMessage = fixture.debugElement.query(By.css('nb-chat-message'));

    expect(chatMessage.nativeElement.getAttribute('ng-reflect-message')).toEqual(message.content);
    expect(chatMessage.nativeElement.getAttribute('ng-reflect-date-format')).toEqual('short');
    expect(chatMessage.nativeElement.getAttribute('ng-reflect-reply')).toEqual(String(message.is_sender));
  });

  it('should only call sendMessage when send button is clicked', () => {
    spyOn(component, 'sendMessage');
    component.likeMatch = likeMatch;
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('nb-chat-form'));
    buttonElement.nativeElement.dispatchEvent(new Event('send'));

    expect(component.sendMessage).toHaveBeenCalled();
  });

  it('should return Message object when createMessageObject is used', () => {
    component.likeMatch = likeMatch;
    fixture.detectChanges();

    const expectedMessage = new Message(component.likeMatch.id, 'Test');
    const returnMessage: Message = component.createMessageObject('Test');

    expect(returnMessage).toEqual(expectedMessage);
    expect(returnMessage).toBeInstanceOf(Message);
  });

  it('should only call getLocalUserId when createMessageObject is called', () => {
    spyOn(component, 'getLocalUserId');
    component.likeMatch = likeMatch;
    fixture.detectChanges();

    component.createMessageObject('Test');

    expect(component.getLocalUserId).toHaveBeenCalled();
  });

  it('should return undefined when getLocalUserId is used and there is no local user', () => {
    const id = component.getLocalUserId();

    expect(id).toBe(undefined);
  });

  it('should only call addMessageToChatLocally when sendMessage is called', () => {
    spyOn(component, 'addMessageToChatLocally');
    component.likeMatch = likeMatch;
    fixture.detectChanges();

    component.sendMessage({message: 'Test'});

    expect(component.addMessageToChatLocally).toHaveBeenCalled();
  });

  it('should add message to likeMatch message array when using addMessageToChatLocally', () => {
    component.likeMatch = likeMatch;
    fixture.detectChanges();

    const text = 'Test';
    component.addMessageToChatLocally(text);

    expect(component.likeMatch.messages).toContain({
      content: text,
      created_at: new Date(),
      is_sender: true});
  });
});
