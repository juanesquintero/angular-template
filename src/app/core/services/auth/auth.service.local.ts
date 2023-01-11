import { IToken } from './../../../shared/models/auth.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IUser } from '@shared/models/user.model';
import { environment } from '@src/environments/environment';
import { ICredentials } from '@shared/models/auth.model';


@Injectable()
export class AuthLocalService {
  public isAuthenticated = new BehaviorSubject(this.isLoggedIn);
  private endpoint = environment.api_path + '/auth';

  constructor(private http: HttpClient) { }

  private set _userInfo(userInfo: IUser)  {
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
  }

  private set _token(accessToken: string) {
    localStorage.setItem('accessToken', accessToken);
  }

  private get _userInfo() : IUser {
    return JSON.parse(localStorage.getItem('userInfo') || '{}');
  }

  private get _token(): string  {
    return localStorage.getItem('accessToken') || '';
  }

  get isLoggedIn(): boolean {
    return !!(this._token && this._userInfo);
  }

  get userInfo(): Observable<IUser> {
    return of(this._userInfo);
  }

  get token(): Observable<string>  {
    return of(this._token);
  }

  private setUser() {
    this.http.post(
      this.endpoint + '/userInfo',
      { token : this._token }
    ).subscribe((res: any) => {
      this._userInfo = res;
      this.isAuthenticated.next(true);
    })
  }

  login(user: ICredentials) {
     this.http.post<IToken>(this.endpoint + '/login', user)
      .subscribe((res: any) => {
        this._token = res.token;
        this.setUser();
      })
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userInfo');
    this.isAuthenticated.next(false);
  }
}
