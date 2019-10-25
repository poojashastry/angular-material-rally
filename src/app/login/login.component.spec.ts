import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        NoopAnimationsModule,
        FormsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a checkbox in username if populated', () => {
    component.username = 'username';
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.username-icon')).toBeTruthy();
  });

  it('should not show a checkbox in username if not populated', () => {
    component.username = '';
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.username-icon')).toBeFalsy();
  });

  it('should show a checkbox in password if >= than expected chars', () => {
    component.password = '123456789';
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.password-icon')).toBeTruthy();
  });

  it('should not show a checkbox in password if < than expected chars', () => {
    component.password = '123';
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.password-icon')).toBeFalsy();
  });
});
