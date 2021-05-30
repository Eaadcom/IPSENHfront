import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialMatchInfoComponent } from './potential-match-info.component';

describe('PotentialMatchInfoComponent', () => {
  let component: PotentialMatchInfoComponent;
  let fixture: ComponentFixture<PotentialMatchInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotentialMatchInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotentialMatchInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
