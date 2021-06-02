import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';
import {environment} from '../../../environments/environment';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Message} from '../models/message.model';
import {RouterTestingModule} from '@angular/router/testing';

describe('MessageService', () => {
  let service: MessageService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(MessageService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should execute POST when posting a message', () => {
    const likeMatchId = 1;
    const message = new Message(likeMatchId, 'test');
    service.create(message).subscribe();

    const req = httpMock.expectOne(environment.APIEndpoint + `v1/like-match/${likeMatchId}/message`);
    expect(req.request.method).toBe('POST');
  });
});
