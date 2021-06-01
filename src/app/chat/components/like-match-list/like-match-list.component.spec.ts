import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeMatchListComponent } from './like-match-list.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

describe('LikeMatchListComponent', () => {
  let component: LikeMatchListComponent;
  let fixture: ComponentFixture<LikeMatchListComponent>;
  let echo: Echo;
  let pusher: Pusher;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeMatchListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeMatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    pusher = new Pusher('2649bb334eb27f74faf8');
    echo = new Echo({
      broadcaster: 'pusher',
      key: '2649bb334eb27f74faf8',
      cluster: 'eu',
      forceTLS: true
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
