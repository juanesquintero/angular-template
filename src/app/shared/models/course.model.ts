export interface ICourseDTO {
  name: string;
  date: Date | string;
  length: number;
  description: string;
  topRated?: boolean;
  authors?: IAuthor[];

}

export interface ICourse extends ICourseDTO {
  id: number;
}

export interface ICoursesListParams {
  start?: number;
  count?: number;
  textFragment?: string;
}

export interface IAuthor {
  id: number | string;
  name: string;
  lastName?: string;
}

export interface IAuthorOpt extends IAuthor {
  value: string;
}

export interface ICourseAction {
  submit: string;
  title: string;
  value: string;
}
