import { IUser } from '@shared/models/user.model';


export interface AppState {
  auth: AuthState;
}

export interface AuthState {
  token: string;
  userInfo: IUser | null;
  loginError: string;
  isAuthenticated: boolean;
}
