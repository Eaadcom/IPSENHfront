import {NgModule} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute} from '@angular/router';
import {NbDialogRef} from '@nebular/theme';
import {AuthenticationTestingModule} from '../../src/app/authentication/testing/authentication-testing.module';

@NgModule({
  imports: [
    AuthenticationTestingModule,
    HttpClientTestingModule,
    RouterTestingModule,
  ],
  exports: [
    AuthenticationTestingModule,
    HttpClientTestingModule,
    RouterTestingModule,
  ],
  providers: [
    {provide: ActivatedRoute, useValue: {}},
    {provide: NbDialogRef, useValue: {}}
  ]
})
export class AppTestingModule {
}
