import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNbAuthComponent } from './custom-nb-auth.component';

describe('CustomNbAuthComponent', () => {
  let component: CustomNbAuthComponent;
  let fixture: ComponentFixture<CustomNbAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomNbAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNbAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
