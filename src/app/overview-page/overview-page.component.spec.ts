import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewPageComponent } from './overview-page.component';
import { RallyFinanceCardModule } from '../rally-finance-card/rally-finance-card.module';
import { RallyBudgetCardModule } from '../rally-budget-card/rally-budget-card.module';

describe('OverviewPageComponent', () => {
  let component: OverviewPageComponent;
  let fixture: ComponentFixture<OverviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewPageComponent],
      imports: [RallyFinanceCardModule, RallyBudgetCardModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
