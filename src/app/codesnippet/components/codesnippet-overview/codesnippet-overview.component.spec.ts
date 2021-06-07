import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CodesnippetOverviewComponent} from './codesnippet-overview.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {CodesnippetModule} from '../../codesnippet.module';
import {ActivatedRoute, convertToParamMap} from '@angular/router';

describe('CodesnippetOverviewComponent', () => {
  let component: CodesnippetOverviewComponent;
  let fixture: ComponentFixture<CodesnippetOverviewComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodesnippetOverviewComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                  Codesnippets: []
              }
            }
          }
        },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, CodesnippetModule],
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
