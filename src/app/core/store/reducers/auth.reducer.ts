import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.action';
import { AuthState } from '../selectors';


export const authInitialState: AuthState = {
  token: '',
  userInfo: null,
  loginError: '',
  isAuthenticated: false,
}

export const authReducer = createReducer(
  authInitialState,
  on(AuthActions.loginSuccess, (state, response): AuthState => {
    return {
      ...state,
      token: response.token,
    }
  }),
  on(AuthActions.loginFailure, (state, error): AuthState => {
    return {
      ...state,
      ...authInitialState,
      loginError: error.error,
    }
  }),
  on(AuthActions.userInfoSuccess, (state, response): AuthState => {
    return {
      ...state,
      isAuthenticated: true,
      userInfo: response
    }
  }),
  on(AuthActions.logout, (state, response): AuthState => {
    return {
      ...authInitialState,
      isAuthenticated: false,
    }
  }),
  on(AuthActions.load, (state, localState): AuthState => {
    return { ...localState }
  }),
);
