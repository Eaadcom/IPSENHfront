import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute} from '@angular/router';
import {CodesnippetOverviewComponent} from '../../../src/app/codesnippet/components/codesnippet-overview/codesnippet-overview.component';
import {CodesnippetModule} from '../../../src/app/codesnippet/codesnippet.module';
import {AppTestingModule} from '../../app/app-testing.module';
import {AppComponent} from '../../../src/app/app.component';

describe('CodesnippetOverviewComponent', () => {
  let component: CodesnippetOverviewComponent;
  let fixture: ComponentFixture<CodesnippetOverviewComponent>;
  let appComponent: AppComponent;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodesnippetOverviewComponent],
      imports: [AppTestingModule, CodesnippetModule],
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
    appComponent = TestBed.createComponent(AppComponent).componentInstance;
    component = fixture.componentInstance;
    component.codesnippets = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should add a codesnippet to codesnippets list', () => {
    expect(component.codesnippets.length).toBeGreaterThan(0);
  });

  it('setEmptyCodesnippet should set isNewCodesnippet to true', () => {
    const codesnippet = component['setEmptyCodesnippet']();
    const isNewCodesnippet = component['isNewCodesnippet'](codesnippet);
    expect(isNewCodesnippet).toBe(true);
  });

});
