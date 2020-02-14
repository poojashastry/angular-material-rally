import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewPageComponent } from './overview-page.component';
import { RallyFinanceCardModule } from '../rally-finance-card/rally-finance-card.module';
import { RallyBudgetCardModule } from '../rally-budget-card/rally-budget-card.module';

@NgModule({
  declarations: [OverviewPageComponent],
  imports: [CommonModule, RallyFinanceCardModule, RallyBudgetCardModule],
  exports: [OverviewPageComponent],
})
export class OverviewPageModule {}
