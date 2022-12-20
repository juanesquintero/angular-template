import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ICredentials, IUser } from '@shared/models/user.model';
import { environment } from '@src/environments/environment';


@Injectable()
export class AuthService {
  public isAuthenticated = new BehaviorSubject(this.isLoggedIn);
  private endpoint = environment.api_path + '/auth';

  constructor(private http: HttpClient) { }

  get isLoggedIn(): boolean {
    return !!(localStorage.getItem('accessToken') && localStorage.getItem('userInfo'));
  }

  get userInfo(): IUser | null {
    return localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo') || '') : null;
  }

  get token(): string  {
    return localStorage.getItem('accessToken') || '';
  }

  login(user: ICredentials) {
    this.http.post(
      this.endpoint + '/login',
      user
    ).subscribe((res: any) => {
      localStorage.setItem('accessToken', res.token);
      this.setUser(res.token);
    })
  }

  setUser(token: string) {
    this.http.post(
      this.endpoint + '/userInfo',
      { token }
    ).subscribe((res: any) => {
      localStorage.setItem('userInfo', JSON.stringify(res));
      this.isAuthenticated.next(true);
    })
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userInfo');
    this.isAuthenticated.next(false);
  }
}
