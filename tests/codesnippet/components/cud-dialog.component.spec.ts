import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CudDialogComponent} from '../../../src/app/codesnippet/components/cud-dialog/cud-dialog.component';
import {CodesnippetModule} from '../../../src/app/codesnippet/codesnippet.module';
import {AppTestingModule} from '../../app/app-testing.module';

describe('CudDialogComponent', () => {

  let component: CudDialogComponent;
  let fixture: ComponentFixture<CudDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CudDialogComponent],
      imports: [AppTestingModule, CodesnippetModule],
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
