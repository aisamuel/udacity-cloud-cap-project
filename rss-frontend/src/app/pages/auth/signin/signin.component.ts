import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

class UserData {
  constructor(
    public username: string = '',
    public password: string = '',
  ) {}
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  user: UserData = new UserData();

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit(): void {
    this.authService.logIn(
      this.user.username, this.user.password
    ).subscribe({
      complete: () => this.router.navigateByUrl(''),
      error: (error) => console.error(error),
    });
  }
}
