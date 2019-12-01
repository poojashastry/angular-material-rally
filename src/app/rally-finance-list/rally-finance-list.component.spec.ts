import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RallyFinanceListComponent} from './rally-finance-list.component';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material';
import {By} from "@angular/platform-browser";

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
    component.items = [
      {title: 'Checking', subtitle: '********1234', value: "2215.13"},
      {title: 'Home Savings', subtitle: '********4234', value: "8676.88"},
      {title: 'Car savings', subtitle: '********9012', value: "900.13"},
    ];
    component.visibleItemsSize = 3;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show 3 items in list', () => {
    const listDiv = fixture.debugElement.query(By.css('.list-container'));
    expect(listDiv.children.length).toEqual(3);
    listDiv.children.forEach((element) => {
      expect(element).toBeTruthy();
    });

    const seeAllButton = fixture.debugElement.query(By.css('.see-all-button'));
    expect(seeAllButton).toBeFalsy();
  });

  it("should show see all button if list size is greater than visibleItemsSize", () => {
    component.visibleItemsSize = 2;
    fixture.detectChanges();

    const seeAllButton = fixture.debugElement.query(By.css('.see-all-button'));
    expect(seeAllButton).toBeTruthy();
  });
});
