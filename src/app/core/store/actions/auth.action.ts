import { IUser } from '@shared/models/user.model';
import { createAction, props } from '@ngrx/store';
import { ICredentials, IToken } from '@shared/models/auth.model';
import { AuthState } from '../selectors';

export const loginRequest = createAction(
  '[Auth] Login Request',
  props<ICredentials>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<IToken>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{error: string}>()
);

export const userInfoRequest = createAction(
  '[Auth] User Info Request',
  props<IToken>()
);

export const userInfoSuccess = createAction(
  '[Auth] User Info Success',
  props<IUser>()
);

export const logout = createAction(
  '[Auth] Auth Logout'
);

export const load = createAction(
  '[Auth] Auth Load',
  props<AuthState>()
);
