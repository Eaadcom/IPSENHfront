import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ChatPageComponent} from '../../../src/app/chat/pages/chat-page/chat-page.component';
import {AuthenticationModule} from '../../../src/app/authentication/authentication.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NbTokenLocalStorage, NbTokenStorage} from '@nebular/auth';
import {ChatModule} from '../../../src/app/chat/chat.module';
import {ActivatedRoute} from '@angular/router';
import {AppTestingModule} from '../../app/app-testing.module';

describe('ChatPageComponent', () => {
  let component: ChatPageComponent;
  let fixture: ComponentFixture<ChatPageComponent>;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatPageComponent],
      imports: [AppTestingModule, ChatModule],
      providers: [
        {provide: ActivatedRoute, useValue: {
            snapshot: {
              data: {
                likeMatches: []
              }
            }
          }
        },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
