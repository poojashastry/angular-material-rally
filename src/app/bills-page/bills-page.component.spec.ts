import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsPageComponent } from './bills-page.component';

describe('BillsPageComponent', () => {
  let component: BillsPageComponent;
  let fixture: ComponentFixture<BillsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillsPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
