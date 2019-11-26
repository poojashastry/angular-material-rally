import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewPageComponent } from './overview-page.component';
import { RallyFinanceCardModule } from '../rally-finance-card/rally-finance-card.module';

@NgModule({
  declarations: [OverviewPageComponent],
  imports: [CommonModule, RallyFinanceCardModule],
  exports: [OverviewPageComponent],
})
export class OverviewPageModule {}
