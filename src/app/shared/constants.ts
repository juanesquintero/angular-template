import { IAction } from './models';

export const APP_ROUTES = {
  courses: 'courses'
};

export const ACTIONS_LABEL: Record<string, IAction> = {
  edit: 'update',
  new: 'create',
  remove: 'delete',
}
