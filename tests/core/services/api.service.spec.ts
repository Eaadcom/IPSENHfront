// import {TestBed} from '@angular/core/testing';
// import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
// import {environment} from 'src/environments/environment';
// import {ApiService} from '../../../src/app/core/services/api.service';
//
// describe('ApiService', () => {
//   let service: ApiService;
//   let httpMock: HttpTestingController;
//
//   beforeEach(() => {
//
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//     });
//
//     httpMock = TestBed.inject(HttpTestingController);
//     service = TestBed.inject(ApiService);
//
//   });
//
//   afterEach(() => {
//     httpMock.verify();
//   });
//
//   it('should execute GET request', () => {
//     interface MockResponse {
//       status: number;
//       message: string;
//     }
//
//     const dummyResponse = {
//       status: 200,
//       message: 'OK',
//     } as MockResponse;
//
//     service.get<MockResponse>('/user').subscribe(
//       response => {
//         expect(response.status).toBe(200);
//         expect(response.message).toBe('OK');
//       });
//
//     const req = httpMock.expectOne(environment.APIEndpoint + '/user');
//     expect(req.request.method).toBe('GET');
//     req.flush(dummyResponse);
//
//   });
//
//   it('should execute POST request', () => {
//     const requestBody = {name: 'bob'};
//     service.post('/user', requestBody).subscribe(
//       () => {
//         /*request was successful*/
//       },
//       () => {
//         fail();
//       });
//
//
//     const req = httpMock.expectOne(environment.APIEndpoint + '/user');
//     expect(req.request.method).toBe('POST');
//     expect(req.request.body.name).toBe('bob');
//   });
//
//   it('should execute PUT request', () => {
//     const requestBody = {name: 'bob'};
//     service.put('/user', requestBody).subscribe(
//       () => {
//         /*request was successful*/
//       },
//       () => {
//         fail();
//       });
//
//
//     const req = httpMock.expectOne(environment.APIEndpoint + '/user');
//
//     expect(req.request.method).toBe('PUT');
//     expect(req.request.body.name).toBe('bob');
//   });
//
//   it('should execute DELETE request', () => {
//
//     service.delete('/user/1').subscribe(
//       () => {
//         /*request was successful*/
//       },
//       () => {
//         fail();
//       });
//
//     httpMock.expectOne(environment.APIEndpoint + '/user/1');
//   });
//
// });
