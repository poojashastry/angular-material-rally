import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RallyFinanceCardComponent } from './rally-finance-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RallyFinanceListModule } from '../rally-finance-list/rally-finance-list.module';

@NgModule({
  declarations: [RallyFinanceCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    RallyFinanceListModule,
  ],
  exports: [RallyFinanceCardComponent],
})
export class RallyFinanceCardModule {}
