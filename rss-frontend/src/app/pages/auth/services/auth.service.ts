import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment} from 'src/environments/environment'

export interface User {
  readonly id: string;
  readonly username: string;
  readonly first_name: string;
  readonly last_name: string;
}

export interface Token {
  readonly access: string;
  readonly refresh: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  private static parseUserFromAccessToken(accessToken: string): User {
    const [, payload, ] = accessToken.split('.');
    const decoded = window.atob(payload);
    return JSON.parse(decoded);
  }

  static getUser(): User | undefined {
    const accessToken = this.getAccessToken();
    if (accessToken) {
      return this.parseUserFromAccessToken(accessToken);
    }
    return undefined;
  }

  static getAccessToken(): string | undefined {
    const item = window.localStorage.getItem('feed.auth');
    if (!item) {
      return undefined;
    }
    const token = JSON.parse(item);
    if (token) {
      return token.access;
    }
    return undefined;
  }

  signUp(
    username: string,
    firstName: string,
    lastName: string,
    password: string,
  ): Observable<User> {
    const url = environment.apiHost + 'user/api/sign_up/';
    const formData = new FormData();
    formData.append('username', username);
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('password1', password);
    formData.append('password2', password);
    return this.http.request<User>('POST', url, { body: formData });
  }

  logIn(username: string, password: string): Observable<Token> {
    const url = environment.apiHost + 'user/api/log_in/';
    return this.http.post<Token>(url, { username, password }).pipe(
      tap(token => localStorage.setItem('feed.auth', JSON.stringify(token)))
    );
  }

  logOut(): void {
    localStorage.removeItem('feed.auth');
  }
}
