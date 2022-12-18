import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, exhaustMap, map, tap } from 'rxjs';
import { ILoginFailureResponse, ILoginSuccessResponse } from '../../models/auth.model';
import { AuthService } from '@core/services/auth/auth.service';
import * as AuthActions from '../actions/auth.action';

@Injectable()
export class AuthEffects {
  loginRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginRequest),
      exhaustMap((action: any) =>
        this.authService
          .login({ email: action.email, password: action.password })
          .pipe(
            map((loginSuccessResponse: ILoginSuccessResponse) =>
              AuthActions.loginSuccess({ loginSuccessResponse })
            ),
            catchError((error: ILoginFailureResponse) => of(
              AuthActions.loginFailure({ loginFailureResponse: error })
            ))
          )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(({ loginSuccessResponse }) => {
          this.router.navigateByUrl('/');
          alert(
            `Login Successful! Welcome, ${loginSuccessResponse.accessToken}`
          );
        })
      ),
    { dispatch: false }
  );

  constructor(
    @Inject(Actions) private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) { }
}
