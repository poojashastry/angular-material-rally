import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RallyBudgetCardComponent } from './rally-budget-card.component';

@NgModule({
  declarations: [RallyBudgetCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
  ],
  exports: [RallyBudgetCardComponent],
})
export class RallyBudgetCardModule {}