export interface ICourseDTO {
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
  topRated?: boolean;
  authors?: string[];
}

export interface ICourse extends ICourseDTO {
  id: string;
}

export interface ICourseAction {
  submit: string;
  title: string;
  value: string;
}
