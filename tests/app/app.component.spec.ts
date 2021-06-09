import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from '../../src/app/app.component';
import {AppTestingModule} from './app-testing.module';
import {AppModule} from '../../src/app/app.module';
import {By} from '@angular/platform-browser';
import {Subscription} from 'rxjs';
import {NbAuthService, NbAuthSimpleToken, NbAuthToken} from '@nebular/auth';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTestingModule, AppModule],
      declarations: [AppComponent],
      providers: [NbAuthService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a nb-layout in the html', () => {
    const layout = fixture.debugElement.query(By.css('nb-layout'));

    expect(layout).toBeTruthy();
  });

  it('should contain a nb-layout-column in the html', () => {
    const layoutColumn = fixture.debugElement.query(By.css('nb-layout-column'));

    expect(layoutColumn).toBeTruthy();
  });

  it('should contain the router-outlet in the html', () => {
    const routerOutlet = fixture.debugElement.query(By.css('router-outlet'));

    expect(routerOutlet).toBeTruthy();
  });

  it('should create an isAuthenticated boolean on ngInit', () => {
    fixture.detectChanges();

    expect(component.isAuthenticated).toBeFalse();
  });

  it('should create an Subscription object for auth on ngInit', () => {
    expect(component.authSubscription).toBeInstanceOf(Subscription);
  });

  it('should call listenIfAuthenticated on NgInit', () => {
    spyOn(component, 'listenIfAuthenticated');
    fixture.detectChanges();

    expect(component.listenIfAuthenticated).toHaveBeenCalled();
  });

  it('should unsubscribe to authSubscription on NgDestroy', () => {
    spyOn(component.authSubscription, 'unsubscribe');

    component.ngOnDestroy();

    expect(component.authSubscription.unsubscribe).toHaveBeenCalled();
  });

  it('should call checkIfAuthenticated when using listenIfAuthenticated in ngOnInit', () => {
    spyOn(component, 'checkIfAuthenticated');
    fixture.detectChanges();

    expect(component.checkIfAuthenticated).toHaveBeenCalled();
  });

  it('should set isAuthenticated when using checkIfAuthenticated', () => {
    let expected!: boolean;

    component.nbAuthService.getToken().subscribe( token => {
      expected = component.checkIfAuthenticated(token);
    });

    expect(component.isAuthenticated).toEqual(expected);
  });

  it('should validate token when using checkIfAuthenticated', () => {
    let authToken!: NbAuthToken;
    component.nbAuthService.getToken().subscribe( token => {
      authToken = token;
    });

    expect(authToken.isValid).toBeTruthy();
    expect(authToken).toBeInstanceOf(NbAuthSimpleToken);
  });
});
