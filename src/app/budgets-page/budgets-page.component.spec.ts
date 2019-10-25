import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetsPageComponent } from './budgets-page.component';

describe('BudgetsPageComponent', () => {
  let component: BudgetsPageComponent;
  let fixture: ComponentFixture<BudgetsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetsPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
