import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { coursesMock } from '@shared/mocks/courses.mock';
import { ICourse, ICourseDTO } from '@shared/models/course.model';

@Injectable()
export class CoursesService {

  public courses: ICourse[] = coursesMock;

  constructor() { }

  getList(): Observable<ICourse[]> {
    return of(this.courses);
  }

  getOne(id: number): Observable<ICourse> {
    return of(this.courses.find(c => c.id == id) as ICourse);
  }

  create(newCourse: ICourseDTO): Observable<string> {
    const id = Math.max(...this.courses.map(c => c.id));
    this.courses.push({ id: id, ...newCourse });
    return of(`${id} Course Created`);
  }

  update(
    id: number,
    updatedCourse: ICourseDTO
  ): Observable<string> {
    this.courses = this.courses.map((course: ICourse) => {
      return course.id === id ? { id: id, ...updatedCourse } : course;
    });
    return of(`${id} Course Updated!`);
  }

  delete(id: number): Observable<string> {
    this.courses = this.courses.filter(c => c.id !== id);
    return of(`${id} Course Deleted!`);
  }
}
