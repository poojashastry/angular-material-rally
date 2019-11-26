import { Component, OnInit, Input } from '@angular/core';
import { FinanceSubcategory } from '../rally-finance-card/rally-finance-card.component';

@Component({
  selector: 'rally-finance-list',
  templateUrl: './rally-finance-list.component.html',
  styleUrls: ['./rally-finance-list.component.scss'],
})
export class RallyFinanceListComponent implements OnInit {
  /** Items belonging to this category. */
  @Input() items: FinanceSubcategory[];

  /** Number of items that are visible in the collapsed view of this component. */
  @Input() visibleItemsSize: number;

  constructor() {}

  ngOnInit() {}
}
