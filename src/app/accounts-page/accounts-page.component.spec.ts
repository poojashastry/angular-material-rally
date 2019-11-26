import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsPageComponent } from './accounts-page.component';

describe('AccountsPageComponent', () => {
  let component: AccountsPageComponent;
  let fixture: ComponentFixture<AccountsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountsPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
