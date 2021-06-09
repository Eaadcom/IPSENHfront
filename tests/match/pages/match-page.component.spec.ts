import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MatchPageComponent} from '../../../src/app/match/pages/match-page/match-page.component';
import {AppTestingModule} from '../../app/app-testing.module';
import {MatchModule} from '../../../src/app/match/match.module';

describe('MatchPageComponent', () => {
  let component: MatchPageComponent;
  let fixture: ComponentFixture<MatchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchPageComponent],
      imports: [AppTestingModule, MatchModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
