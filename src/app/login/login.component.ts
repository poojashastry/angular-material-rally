import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'rally-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = 'philcao5678';
  password = '';

  MINIMUM_PASSWORD_LENGTH = 9;

  constructor(private readonly router: Router) {}

  onLoginFormSubmit(formComponent: NgForm) {
    if (this.password.length >= this.MINIMUM_PASSWORD_LENGTH) {
      this.router.navigateByUrl('overview');
    }
  }

  ngOnInit() {}
}
