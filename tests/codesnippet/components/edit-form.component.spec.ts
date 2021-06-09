import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HttpTestingController} from '@angular/common/http/testing';
import {EditFormComponent} from '../../../src/app/codesnippet/components/edit-form/edit-form.component';
import {CodesnippetService} from '../../../src/app/codesnippet/services/codesnippet.service';
import {CodesnippetModule} from '../../../src/app/codesnippet/codesnippet.module';
import {AppTestingModule} from '../../app/app-testing.module';
import {FormGroup} from '@angular/forms';
import {Codesnippet} from '../../../src/app/codesnippet/models/codesnippet.model';
import objectContaining = jasmine.objectContaining;
import {environment} from '../../../src/environments/environment';

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
    component.codesnippet = new Codesnippet(1, 1, 'a string', 'language', 'theme', new Date(), new Date());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should build an FormGroup on ngInit', () => {
    expect(component.snippetForm).toBeInstanceOf(FormGroup);
  });

  it('newCodesnippet should be set to false after NgOnInit', () => {
    expect(component.newCodesnippet).toBe(false);
  });

  it('backupCodesnippet should be equal to codesnippet', () => {
    expect(component.backupSnippet).toEqual(objectContaining(component.codesnippet));
  });

  it('language options should be set', () => {
    expect(component.languageOptions.length).toBeGreaterThan(0);
  });

  it('theme options should be set', () => {
    expect(component.themeOptions.length).toBeGreaterThan(0);
  });

  it('capatalize first letter should work', () => {
    const word = 'word';
    expect(component.capatalizeFirstLetter(word)).toEqual('Word');
  });

  it('codesnippet should be updated when saved', () => {
    const newCodesnippet = new Codesnippet(1, 1, 'a new string', 'language', 'theme', new Date(), new Date());
    component.codesnippet = newCodesnippet;
    component.snippetForm.setValue(newCodesnippet);
    component.saveForm();
    const req = httpMock.expectOne(environment.APIEndpoint + 'v1/codesnippet/' + newCodesnippet.id);
    expect(req.request.body).toEqual(objectContaining(newCodesnippet));
  });

  it('new codesnippet should be created when saved', () => {
    component.newCodesnippet = true;
    const newCodesnippet = new Codesnippet(null as any, 1, 'a string', 'language', 'theme', new Date(), new Date());
    component.codesnippet = newCodesnippet;
    component.snippetForm.setValue(newCodesnippet);
    component.saveForm();
    const req = httpMock.expectOne(environment.APIEndpoint + 'v1/codesnippet');
    expect(req.request.body).toEqual(objectContaining(newCodesnippet));
  });

});
