import { Router } from '@angular/router';
import { IUser } from '@shared/models/user.model';
import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth/auth.service';
import * as AuthActions from '../actions/auth.action';
import { ICredentials, IToken } from '@shared/models/auth.model';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) { }

  loginRequest$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.loginRequest),
      switchMap((user: ICredentials) =>
        this.authService.postlogin(user).pipe(
          switchMap((res: IToken) => of(
            AuthActions.loginSuccess(res),
            AuthActions.userInfoRequest(res),
          )),
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
          map((res: IUser) => AuthActions.userInfoSuccess(res)),
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
}
