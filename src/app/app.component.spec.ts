import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RallyFinanceCardModule } from './rally-finance-card/rally-finance-card.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'fake-login',
  template: '',
  styleUrls: [],
})
class FakeComponent {}

describe('AppComponent', () => {
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'login', component: FakeComponent },
        ]),
        RallyFinanceCardModule,
        MatIconModule,
        MatSidenavModule,
        NoopAnimationsModule,
        MatToolbarModule,
        FlexLayoutModule,
      ],
      declarations: [AppComponent, FakeComponent],
    }).compileComponents();
    router = TestBed.get(Router);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'rally'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('rally');
  });

  it('should hide the toolbar and sidebar on the login route', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.ngZone.run(() => {
      router.navigate(['login']);
    });
    tick();
    expect(fixture.nativeElement.querySelector('mat-toolbar')).toBeFalsy();
    expect(
      fixture.debugElement.query(By.css('mat-sidenav')).componentInstance.opened
    ).toBe(false);
  }));
});
