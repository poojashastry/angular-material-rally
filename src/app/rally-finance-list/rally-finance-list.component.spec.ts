import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RallyFinanceListComponent } from './rally-finance-list.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';

describe('RallyFinanceListComponentComponent', () => {
  let component: RallyFinanceListComponent;
  let fixture: ComponentFixture<RallyFinanceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, FlexLayoutModule, MatIconModule],
      declarations: [RallyFinanceListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RallyFinanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
