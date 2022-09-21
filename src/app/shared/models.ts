import { APP_ROUTES } from './constants';

export type IAppRoute = keyof typeof APP_ROUTES;

export interface IAppName {
  api: string;
}
