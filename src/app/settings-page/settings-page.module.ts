import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from './settings-page.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SettingsPageComponent],
  imports: [CommonModule, MatIconModule, MatListModule],
  exports: [SettingsPageComponent],
})
export class SettingsPageModule {}
