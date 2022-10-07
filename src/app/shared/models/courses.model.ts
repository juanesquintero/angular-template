export interface ICourseBase {
  title: string,
  description:	string,
  hours: number,
  price: number,
}
export interface ICourseDTO extends ICourseBase {
  id: string;
}

export interface ICourseRow extends Omit<ICourseDTO, 'description' | 'hours'> {}

export interface ICoursesTable {
  rows: ICourseRow[];
  columns: string[];
}
