import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RallyFinanceListComponent } from './rally-finance-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [RallyFinanceListComponent],
  imports: [CommonModule, MatIconModule, FlexLayoutModule],
  exports: [RallyFinanceListComponent],
})
export class RallyFinanceListModule {}
