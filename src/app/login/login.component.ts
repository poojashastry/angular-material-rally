import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rally-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = 'philcao5678';
  password = '';

  MINIMUM_PASSWORD_LENGTH = 9;

  constructor() {}

  ngOnInit() {}
}
