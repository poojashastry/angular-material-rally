import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RallyFinanceCardComponent } from './rally-finance-card.component';
import { MatCardModule } from '@angular/material/card';

describe('RallyFinanceCardComponentComponent', () => {
  let component: RallyFinanceCardComponent;
  let fixture: ComponentFixture<RallyFinanceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [RallyFinanceCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RallyFinanceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
