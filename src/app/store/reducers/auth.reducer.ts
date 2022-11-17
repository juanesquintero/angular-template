import { loginFailure } from '../actions/auth.action';
import { IUser } from '../../shared/models/auth.model';
import { createReducer, on } from '@ngrx/store';
import { loginSuccess } from '../actions/auth.action';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

export interface State {
  token: string | null;
  user: IUser | null;
  loginError?: string | null;
}

export const initialState: State = {
  token: null,
  user: null,
}

export const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { loginSuccessResponse }): State => {
    const decodeToken = helper.decodeToken(loginSuccessResponse.accessToken);
    return {
      ...state,
      token: loginSuccessResponse.accessToken,
      user: decodeToken?.subject
    }
  }),
  on(loginFailure, (state, { loginFailureResponse }): State => {
    return {
      ...state,
      loginError: loginFailureResponse.message,
      token: null,
      user: null,
    }
  }),

);


