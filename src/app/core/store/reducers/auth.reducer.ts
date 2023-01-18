import { createReducer, on } from '@ngrx/store';
import { AuthLocalService } from '../../services/auth/auth.service.local';
import * as AuthActions from '../actions/auth.action';
import { AuthState } from '../selectors';

const authLocalService = new AuthLocalService();

export const authInitialState: AuthState  = {
  token: authLocalService.token,
  userInfo: authLocalService.user,
  loginError: '',
  isAuthenticated: authLocalService.isLoggedIn,
}

export const authReducer = createReducer(
  authInitialState,
  on(AuthActions.loginSuccess, (state, response ): AuthState => {
    return {
      ...state,
      token: response.token,
    }
  }),
  on(AuthActions.loginFailure, (state, error ): AuthState => {
    return {
      ...state,
      ...authInitialState,
      loginError: error.error,
    }
  }),
  on(AuthActions.userInfoSuccess, (state, response ): AuthState => {
    authLocalService.isAuthenticated.next(true);
    return {
      ...state,
      isAuthenticated: true,
      userInfo: response
    }
  }),
  on(AuthActions.logout, (state, response ): AuthState => {
    authLocalService.isAuthenticated.next(false);
    return {
      ...authInitialState,
      isAuthenticated: false,
    }
  }),
);
