import { Component, OnInit, Input } from '@angular/core';

/**
 * Represents a line item in the Rally Finance Card.
 * For example: For the 'Accounts' category, potential subcategories would be 'Checking', 'Home Savings', 'Car savings'
 */
interface FinanceSubcategory {
  title: string;
  subtitle: string;
  value: string;
}

@Component({
  selector: 'rally-finance-card',
  templateUrl: './rally-finance-card.component.html',
  styleUrls: ['./rally-finance-card.component.scss'],
})
export class RallyFinanceCardComponent implements OnInit {
  /** Title of the category. */
  @Input() title: string;

  /** Total value for this category. */
  @Input() value: string;

  /** Items belonging to this category. */
  @Input() items: FinanceSubcategory[];

  /** Number of items that are visible in the collapsed view of this component. */
  @Input() visibleItemsSize : number;

  constructor() {}

  ngOnInit() {}
}
