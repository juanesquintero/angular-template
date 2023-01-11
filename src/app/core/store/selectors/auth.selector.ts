import { createSelector } from '@ngrx/store';
import { AppState, AuthState } from '.';


export const selectAuth = (state: AppState) => state.auth;


export const selectIsAuthenticated = createSelector(
  selectAuth,
  (state: AuthState) => state.isAuthenticated
);

export const selectUserInfo = createSelector(
  selectAuth,
  (state: AuthState) => state.userInfo
);

export const selectToken = createSelector(
  selectAuth,
  (state: AuthState) => state.token
);
