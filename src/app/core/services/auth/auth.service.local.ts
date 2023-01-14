import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '@shared/models/user.model';

@Injectable()
export class AuthLocalService {
  public isAuthenticated = new BehaviorSubject(this.isLoggedIn);

  constructor() { }

  set userInfo(userInfo: IUser | null)  {
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
  }

  set token(accessToken: string) {
    localStorage.setItem('accessToken', accessToken);
  }

  get userInfo() : IUser | null {
    const localValue = localStorage.getItem('userInfo');
    return localValue ?  JSON.parse(localValue) : null;
  }

  get token(): string  {
    return localStorage.getItem('accessToken') || '';
  }

  get isLoggedIn(): boolean {
    return !!(this.token && this.userInfo);
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userInfo');
    this.isAuthenticated.next(false);
  }
}
