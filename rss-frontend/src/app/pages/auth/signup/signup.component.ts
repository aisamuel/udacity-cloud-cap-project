import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

class UserData {
  constructor(
    public username: string = '',
    public firstName: string = '',
    public lastName: string = '',
    public password: string = '',
  ) {}
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  user: UserData = new UserData();

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit(): void {
    this.authService.signUp(
      this.user.username,
      this.user.firstName,
      this.user.lastName,
      this.user.password,
    ).subscribe({
      complete: () => this.router.navigateByUrl('/authentication/log-in'),
      error: (error) => console.error(error),
    });
  }
}
