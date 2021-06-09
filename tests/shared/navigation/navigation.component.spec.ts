import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from '../../../src/app/shared/components/navigation/navigation.component';
import {AppTestingModule} from '../../app/app-testing.module';
import {SharedModule} from '../../../src/app/shared/shared.module';
import {AppModule} from '../../../src/app/app.module';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let actions: DebugElement;
  let action: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTestingModule, SharedModule, AppModule],
      declarations: [ NavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    actions = fixture.debugElement.query(By.css('nb-actions'));
    action = fixture.debugElement.query(By.css('nb-action'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a nb-card in the html', () => {
    expect(actions).toBeTruthy();
  });

  it('should contain a nb-action in the html', () => {
    expect(action).toBeTruthy();
  });

  it('nb-actions should contain correct attributes when shown', () => {
    expect(actions.nativeElement.getAttribute('ng-reflect-size')).toBeTruthy();
  });

  it('nb-actions should contain correct size value when shown', () => {
    expect(actions.nativeElement.getAttribute('ng-reflect-size')).toBe('medium');
  });

  it('nb-action should contain correct attributes when shown', () => {
    expect(action.nativeElement.getAttribute('ng-reflect-router-link')).toBeTruthy();
    expect(action.nativeElement.getAttribute('ng-reflect-icon')).toBeTruthy();
    expect(action.nativeElement.getAttribute('ng-reflect-router-link-active')).toBeTruthy();
  });

  it('nb-action should contain correct routerLink value when shown', () => {
    expect(action.nativeElement.getAttribute('ng-reflect-router-link-active')).toBe('active');
  });
});
