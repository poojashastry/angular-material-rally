import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewPageComponent } from './overview-page.component';
import { RallyFinanceCardModule } from '../rally-finance-card/rally-finance-card.module';

describe('OverviewPageComponent', () => {
  let component: OverviewPageComponent;
  let fixture: ComponentFixture<OverviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewPageComponent],
      imports: [RallyFinanceCardModule],
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
