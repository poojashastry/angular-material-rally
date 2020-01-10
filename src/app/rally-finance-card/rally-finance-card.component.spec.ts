import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RallyFinanceCardComponent } from './rally-finance-card.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';
import { RallyFinanceListModule } from '../rally-finance-list/rally-finance-list.module';
import { By } from '@angular/platform-browser';

describe('RallyFinanceCardComponentComponent', () => {
  let component: RallyFinanceCardComponent;
  let fixture: ComponentFixture<RallyFinanceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        FlexLayoutModule,
        MatIconModule,
        RallyFinanceListModule,
      ],
      declarations: [RallyFinanceCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RallyFinanceCardComponent);
    component = fixture.componentInstance;
    component.title = 'foo';
    component.value = 'bar';
    component.items = [
      { title: 'Checking', subtitle: '********1234', value: '2215.13' },
      { title: 'Home Savings', subtitle: '********4234', value: '8676.88' },
      { title: 'Car savings', subtitle: '********9012', value: '900.13' },
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show title', () => {
    const title = fixture.debugElement.query(By.css('.card-title'));
    expect(title.nativeElement.innerHTML).toBe(component.title);
  });

  it('should show total value', () => {
    const value = fixture.debugElement.query(By.css('.card-value'));
    expect(value.nativeElement.innerHTML).toBe(component.value);
  });

  it('should show list', () => {
    const list = fixture.debugElement.query(By.css('rally-finance-list'));
    expect(list).toBeTruthy();
  });

  it('should show a message when there are no accounts', () => {
    component.items = [];
    fixture.detectChanges();

    const noAccountMessageElement = fixture.debugElement.query(
      By.css('#no-accounts')
    );
    expect(noAccountMessageElement.nativeElement).toBeTruthy();

    const financeList = fixture.debugElement.query(
      By.css('rally-finance-list')
    );
    expect(financeList).toBeFalsy();
  });
});
