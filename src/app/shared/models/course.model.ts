export interface ICourseDTO {
  name: string;
  date: Date;
  length: number;
  description: string;
  topRated?: boolean;
  authors?: IAuthor[];

}

export interface ICourse extends ICourseDTO {
  id: number;
}

export interface IAuthor {
  id: number
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
