import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ContentComponent} from '../../../src/app/codesnippet/components/content/content.component';
import {AppTestingModule} from '../../app/app-testing.module';
import {CodesnippetModule} from '../../../src/app/codesnippet/codesnippet.module';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentComponent],
      imports: [AppTestingModule, CodesnippetModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
