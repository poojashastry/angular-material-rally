import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RallyFinanceListComponent } from './rally-finance-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from "@angular/material";

@NgModule({
  declarations: [RallyFinanceListComponent],
  imports: [CommonModule, MatIconModule, FlexLayoutModule, MatButtonModule],
  exports: [RallyFinanceListComponent],
})
export class RallyFinanceListModule {}
