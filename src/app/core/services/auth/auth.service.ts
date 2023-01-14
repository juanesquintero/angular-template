import { AuthLocalService } from './auth.service.local';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '@shared/models/user.model';
import { environment } from '@src/environments/environment';
import { ICredentials } from '@shared/models/auth.model';
import { IToken } from '@shared/models/auth.model';
import { select, Store } from '@ngrx/store';
import { loginRequest, logout } from '@store/actions/auth.action';
import { AppState } from '@store/selectors/index';
import { selectIsAuthenticated, selectToken, selectUserInfo } from '@store/selectors/auth.selector';

@Injectable()
export class AuthService {
  private endpoint = environment.api_path + '/auth';
  readonly isAuthenticated: Observable<boolean>;
  readonly userInfo: Observable<IUser | null>;
  readonly token: Observable<string>;

  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
    private authLocalService: AuthLocalService,
  ) {
    this.isAuthenticated = this.store.pipe(select(selectIsAuthenticated));
    this.userInfo = this.store.pipe(select(selectUserInfo));
    this.token = this.store.pipe(select(selectToken));
  }

  postlogin(user: ICredentials): Observable<IToken> {
    return this.http.post<IToken>(this.endpoint + '/login', user);
  }

  getUserInfo(token: IToken): Observable<IUser> {
    return this.http.post<IUser>(this.endpoint + '/userInfo', token);
  }

  logout(): void {
    this.store.dispatch(logout());
    this.authLocalService.logout();
  }

  login(credentials: ICredentials): void {
    this.store.dispatch(loginRequest(credentials));
    this.store.pipe(select(selectToken)).subscribe((res) => {
      if (res) this.authLocalService.token = res;
    })
    this.store.pipe(select(selectUserInfo)).subscribe((res) => {
      if (res) this.authLocalService.userInfo = res;
    })
  }
}
