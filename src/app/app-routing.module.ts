import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { AccountsPageComponent } from './accounts-page/accounts-page.component';
import { BillsPageComponent } from './bills-page/bills-page.component';
import { BudgetsPageComponent } from './budgets-page/budgets-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'accounts', component: AccountsPageComponent },
  { path: 'bills', component: BillsPageComponent },
  { path: 'budgets', component: BudgetsPageComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: 'overview', component: OverviewPageComponent },
  { path: '**', redirectTo: '/overview' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
