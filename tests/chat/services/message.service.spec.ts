import {TestBed} from '@angular/core/testing';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {MessageService} from '../../../src/app/chat/services/message.service';
import {environment} from '../../../src/environments/environment';
import {Message} from '../../../src/app/chat/models/message.model';

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

  it('should contain the json data when posting a message', () => {
    const likeMatchId = 1;
    const message = new Message(likeMatchId, 'test', 1);
    service.create(message).subscribe();

    const req = httpMock.expectOne(environment.APIEndpoint + `v1/like-match/${likeMatchId}/message`);
    expect(req.request.body).toBe(message);
  });
});
