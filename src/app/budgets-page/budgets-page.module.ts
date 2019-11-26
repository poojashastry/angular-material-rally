import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetsPageComponent } from './budgets-page.component';

@NgModule({
  declarations: [BudgetsPageComponent],
  imports: [CommonModule],
  exports: [BudgetsPageComponent],
})
export class BudgetsPageModule {}
