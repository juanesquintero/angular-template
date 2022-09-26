export interface ICourseDTO {
  id: string;
  title: string,
  description:	string,
  hours: number,
  price: number,
}

export interface ICourseRow extends Omit<ICourseDTO, 'description' | 'hours'> {}

export interface ICoursesTable {
  rows: ICourseRow[];
  columns: string[];
}
