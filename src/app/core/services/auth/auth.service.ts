import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IUserInfo {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  active: boolean;
}


@Injectable()
export class AuthService {
  isAuthenticated = new BehaviorSubject(this.isLoggedIn);

  constructor() { }

  get isLoggedIn(): boolean {
    return !!(localStorage.getItem('accessToken') && localStorage.getItem('userInfo'));
  }

  login() {
    localStorage.setItem(
      'accessToken',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    );
    localStorage.setItem(
      'userInfo',
      JSON.stringify(
        {
          username: 'jhon_doe',
          email: 'jhon_doe@mail.com',
          firstName: 'John',
          lastName: 'Doe',
          active: true
        }
      )
    );
    this.isAuthenticated.next(true);
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userInfo');
    this.isAuthenticated.next(false);
  }

  getUserInfo(): IUserInfo | null {
    return localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo') || '') : null;
  }
}
