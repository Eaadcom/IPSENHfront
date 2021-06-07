import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HttpTestingController} from '@angular/common/http/testing';
import {EditFormComponent} from '../../../src/app/codesnippet/components/edit-form/edit-form.component';
import {CodesnippetService} from '../../../src/app/codesnippet/services/codesnippet.service';
import {CodesnippetModule} from '../../../src/app/codesnippet/codesnippet.module';
import {AppTestingModule} from '../../app/app-testing.module';

describe('EditFormComponent', () => {
  let component: EditFormComponent;
  let fixture: ComponentFixture<EditFormComponent>;
  let service: CodesnippetService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTestingModule, CodesnippetModule],
    })
      .compileComponents();
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
