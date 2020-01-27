import { Component, OnInit, Input } from '@angular/core';

export interface BudgetEntry {
    title: string;
    remainingAmount: number;
    totalAmount: number;
}

@Component({
    selector: 'rally-budget-card',
    templateUrl: './rally-budget-card.component.html',
    styleUrls: ['./rally-budget-card.component.scss'],
  })
  export class RallyBudgetCardComponent implements OnInit {
    /** Title for the budget card. */
    @Input() title: string;

    /** Amount remaining in the budget. */
    @Input() remainingAmount: string;

    /** Total budget. */
    @Input() totalAmount: string;

    /** Entries belonging to the budget card. */
    @Input() budgetEntries: BudgetEntry[];
  
    constructor() {}
  
    ngOnInit() {}
  }