import { APP_ROUTES } from '../constants';

export type IAppRoute = keyof typeof APP_ROUTES;

export interface IAppName {
  api: string;
}

export interface IModalOptions {
  mode: string;
  action?: any;
  message?: string;
}


export type IModalMode = 'edit' | 'remove' | 'new' | 'detail';

export type IAction = 'update' | 'create' | 'delete';
