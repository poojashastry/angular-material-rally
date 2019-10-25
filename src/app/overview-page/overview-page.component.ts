import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss'],
})
export class OverviewPageComponent implements OnInit {
  accountItems = [
    { title: 'Checking', subtitle: '********1234', value: 2215.13 },
    { title: 'Home Savings', subtitle: '********4234', value: 8676.88 },
    { title: 'Car savings', subtitle: '********9012', value: 900.13 },
  ];

  constructor() {}

  ngOnInit() {}
}
