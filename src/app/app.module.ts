import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountsPageModule } from './accounts-page/accounts-page.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RallyFinanceCardModule } from './rally-finance-card/rally-finance-card.module';
import { BillsPageModule } from './bills-page/bills-page.module';
import { BudgetsPageModule } from './budgets-page/budgets-page.module';
import { SettingsPageModule } from './settings-page/settings-page.module';
import { OverviewPageModule } from './overview-page/overview-page.module';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [AppComponent],
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
    BillsPageModule,
    BudgetsPageModule,
    OverviewPageModule,
    SettingsPageModule,
    MatToolbarModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
