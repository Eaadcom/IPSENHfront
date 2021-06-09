import {TestBed} from '@angular/core/testing';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../../src/environments/environment';
import {CodesnippetService} from '../../../src/app/codesnippet/services/codesnippet.service';
import {Codesnippet} from '../../../src/app/codesnippet/models/codesnippet.model';

describe('CodesnippetService', () => {
  let service: CodesnippetService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CodesnippetService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should execute GET when getting codesnippets by id', () => {
    const id = 1;

    service.getCodesnippetsByUserId(id).subscribe();

    const req = httpMock.expectOne(environment.APIEndpoint + `v1/codesnippet/${id}`);
    expect(req.request.method).toBe('GET');
  });

  it('should execute GET when getting codesnippets of authenticated user', () => {
    service.getCodesnippetsByAuthenticatedUser().subscribe();

    const req = httpMock.expectOne(environment.APIEndpoint + `v1/codesnippet`);
    expect(req.request.method).toBe('GET');
  });

  it('should execute PUT when updating a codesnippet', () => {
    const id = 1;
    const codesnippet = new Codesnippet(id, null as any, '', 'basic', 'light', null as any, null as any);
    service.updateCodesnippet(id, codesnippet).subscribe();

    const req = httpMock.expectOne(environment.APIEndpoint + `v1/codesnippet/${id}`);
    expect(req.request.method).toBe('PUT');
  });

  it('should execute POST when adding a codesnippet', () => {
    const codesnippet = new Codesnippet(null as any, null as any, '', 'basic', 'light', null as any, null as any);
    service.addCodesnippet(codesnippet).subscribe();

    const req = httpMock.expectOne(environment.APIEndpoint + `v1/codesnippet`);
    expect(req.request.method).toBe('POST');
  });

  it('should execute DELETE when deleting codesnippet by id', () => {
    const id = 1;

    service.deleteCodesnippet(id).subscribe();

    const req = httpMock.expectOne(environment.APIEndpoint + `v1/codesnippet/${id}`);
    expect(req.request.method).toBe('DELETE');
  });
});
