import { ICourseAction } from '../models/course.model';


export enum ACTIONS {
  edit = 'edit',
  add = 'add',
}

export const COURSE_ACTIONS: { [key in ACTIONS]: ICourseAction } = {
  edit: {
    submit: 'ws.courses.add_edit.update',
    title: 'ws.courses.add_edit.edit_title',
    value: ACTIONS.edit,
  },

  add: {
    submit: 'ws.courses.add_edit.save',
    title: 'ws.courses.add_edit.add_title',
    value: ACTIONS.add
  }
}

export const MD_SIZE_PX = 768;

export const LG_SIZE_PX = 992;
