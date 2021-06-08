import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NbTokenLocalStorage, NbTokenStorage} from '@nebular/auth';
import {ActivatedRoute} from '@angular/router';
import {MessageListComponent} from '../../../src/app/chat/components/message-list/message-list.component';
import {ChatModule} from '../../../src/app/chat/chat.module';
import {AuthenticationModule} from '../../../src/app/authentication/authentication.module';
import {AppTestingModule} from '../../app/app-testing.module';

describe('MessageListComponent', () => {
  let component: MessageListComponent;
  let fixture: ComponentFixture<MessageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageListComponent],
      imports: [AppTestingModule, ChatModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
