import { load } from './../actions/auth.action';
import { Router } from '@angular/router';
import { IUser } from '@shared/models/user.model';
import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { AuthService } from '@core/services/auth/auth.service';
import { AuthLocalService } from '@core/services/auth/auth.service.local';
import { ICredentials, IToken } from '@shared/models/auth.model';
import * as AuthActions from '../actions/auth.action';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private authService: AuthService,
    private authLocalService: AuthLocalService,
    private router: Router,
  ) { }

  loginRequest$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.loginRequest),
      switchMap((user: ICredentials) =>
        this.authService.postlogin(user).pipe(
          switchMap((res: IToken) => {
            this.authLocalService.token = res.token;
            return of(
              AuthActions.loginSuccess(res),
              AuthActions.userInfoRequest(res),
            )
          }
          ),
          catchError((error: string) => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );

  userInfoRequest$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.userInfoRequest),
      switchMap((token: IToken) =>
        this.authService.getUserInfo(token).pipe(
          map((res: IUser) => {
            this.authLocalService.user = res;
            this.authLocalService.isAuthenticated.next(true);
            return AuthActions.userInfoSuccess(res)
          }),
          catchError((error: string) => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );

  loginRedirect$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.userInfoSuccess),
      tap((action) => {
        this.router.navigate(['courses'])
      })
    ),
    { dispatch: false }
  );

  logoutRequest$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.logout),
      tap((action) => {
        this.authLocalService.logout();
      })
    ),
    { dispatch: false }
  );

  loadRequest$ = createEffect(
    () => this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      tap((action) => {
        const initialState = {
          token: this.authLocalService.token,
          userInfo: this.authLocalService.user,
          loginError: '',
          isAuthenticated: this.authLocalService.isLoggedIn
        };
        this.store.dispatch(load(initialState));
      })
    ),
    { dispatch: false }
  );
}
