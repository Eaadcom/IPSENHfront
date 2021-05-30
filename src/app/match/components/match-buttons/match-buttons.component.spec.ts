import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchButtonsComponent } from './match-buttons.component';

describe('MatchButtonsComponent', () => {
  let component: MatchButtonsComponent;
  let fixture: ComponentFixture<MatchButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
