import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RallyFinanceCardComponent } from './rally-finance-card.component';

@NgModule({
  declarations: [RallyFinanceCardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [RallyFinanceCardComponent],
})
export class RallyFinanceCardModule {}
