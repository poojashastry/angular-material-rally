import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rally';
  accountItems = [
    { title: 'Checking', subtitle: '********1234', value: 2215.13 },
    { title: 'Home Savings', subtitle: '********4234', value: 8676.88 },
    { title: 'Car savings', subtitle: '********9012', value: 900.13 },
  ];
}
