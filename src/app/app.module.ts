import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RallyFinanceCardModule } from './rally-finance-card/rally-finance-card.module';
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { AccountsPageComponent } from './accounts-page/accounts-page.component';
import { AccountsPageModule } from './accounts-page/accounts-page.module';
import { BillsPageComponent } from './bills-page/bills-page.component';
import { BudgetsPageComponent } from './budgets-page/budgets-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewPageComponent,
    AccountsPageComponent,
    BudgetsPageComponent,
    BillsPageComponent,
    SettingsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    RallyFinanceCardModule,
    AccountsPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
