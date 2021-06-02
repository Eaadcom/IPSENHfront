import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CudDialogComponent } from './cud-dialog.component';

describe('CudDialogComponent', () => {
  let component: CudDialogComponent;
  let fixture: ComponentFixture<CudDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CudDialogComponent ]
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
