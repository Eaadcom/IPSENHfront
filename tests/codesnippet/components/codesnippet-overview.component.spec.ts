import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute} from '@angular/router';
import {CodesnippetOverviewComponent} from '../../../src/app/codesnippet/components/codesnippet-overview/codesnippet-overview.component';
import {CodesnippetModule} from '../../../src/app/codesnippet/codesnippet.module';
import {AppTestingModule} from '../../app/app-testing.module';

describe('CodesnippetOverviewComponent', () => {
  let component: CodesnippetOverviewComponent;
  let fixture: ComponentFixture<CodesnippetOverviewComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodesnippetOverviewComponent],
      imports: [AppTestingModule, CodesnippetModule],
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
