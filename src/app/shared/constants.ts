import { ICourseAction } from './models/course.model';


export enum ACTIONS {
  edit = 'edit',
  add = 'add',
}

export const COURSE_ACTIONS: { [key in ACTIONS]: ICourseAction } = {
  edit: {
    submit: 'Update',
    title: 'Edit Course',
    value: ACTIONS.edit,
  },

  add: {
    submit: 'Save',
    title: 'New Course',
    value: ACTIONS.add
  }
}
