import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodesnippetOverviewComponent } from './codesnippet-overview.component';

describe('CodesnippetOverviewComponent', () => {
  let component: CodesnippetOverviewComponent;
  let fixture: ComponentFixture<CodesnippetOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodesnippetOverviewComponent ]
    })
    .compileComponents();
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
