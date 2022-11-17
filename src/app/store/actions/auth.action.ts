import { ILoginFailureResponse, ILoginSuccessResponse } from './../../shared/models/auth.model';
import { createAction, props } from "@ngrx/store";


export const loginRequest = createAction(
  '[Auth] Login Request',
  props<{ credentials: { email: string, password: string } }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ loginSuccessResponse: ILoginSuccessResponse }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ loginFailureResponse: ILoginFailureResponse }>()
);
