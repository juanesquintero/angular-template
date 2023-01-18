import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '@shared/models/user.model';
import { LocalStorageService } from '../local-storage/local-storage.service';

const [userKey, tokenKey] = ['userInfo', 'accessToken']

@Injectable()
export class AuthLocalService {
  public isAuthenticated = new BehaviorSubject(this.isLoggedIn);
  private localStorage: LocalStorageService;

  constructor() {
    this.localStorage = new LocalStorageService();
  }

  set user(userInfo: IUser | null)  {
    this.localStorage?.setItem(userKey, JSON.stringify(userInfo))
  }

  set token(accessToken: string) {
    this.localStorage?.setItem(tokenKey, accessToken);
  }

  get user() : IUser | null {
    const localValue = this.localStorage?.getItem(userKey);
    return localValue ?  JSON.parse(localValue) : null;
  }

  get token(): string  {
    return this.localStorage?.getItem(tokenKey) || '';
  }

  get isLoggedIn(): boolean {
    return !!(this.token && this.user);
  }

  logout() {
    this.localStorage?.removeItem(tokenKey);
    this.localStorage?.removeItem(userKey);
    this.isAuthenticated.next(false);
  }
}
