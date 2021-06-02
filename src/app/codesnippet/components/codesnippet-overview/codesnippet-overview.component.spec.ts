import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodesnippetOverviewComponent } from './codesnippet-overview.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {ActivatedRoute} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('CodesnippetOverviewComponent', () => {
  let component: CodesnippetOverviewComponent;
  let fixture: ComponentFixture<CodesnippetOverviewComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodesnippetOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    httpMock = TestBed.inject(HttpTestingController);
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(CodesnippetOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
