import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CudDialogComponent} from './cud-dialog.component';
import {CodesnippetModule} from '../../codesnippet.module';
import {SharedModule} from '../../../shared/shared.module';
import {NB_DIALOG_CONFIG, NbDialogModule, NbDialogRef, NbDialogService} from '@nebular/theme';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CudDialogComponent', () => {

  let component: CudDialogComponent;
  let fixture: ComponentFixture<CudDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CudDialogComponent],
      imports: [CodesnippetModule, HttpClientTestingModule],
      providers: [{provide: NbDialogRef, useValue: {}}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CudDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
