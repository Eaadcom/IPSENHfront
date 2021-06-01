import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormComponent } from './edit-form.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CodesnippetService} from '../../services/codesnippet.service';

describe('EditFormComponent', () => {
  let component: EditFormComponent;
  let fixture: ComponentFixture<EditFormComponent>;
  let service: CodesnippetService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFormComponent ]
    })
    .compileComponents();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CodesnippetService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
