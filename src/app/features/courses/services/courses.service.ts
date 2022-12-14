import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { coursesMock } from '@shared/mocks/courses.mock';
import { ICourse, ICourseDTO } from '@shared/models/course.model';

@Injectable()
export class CoursesService {

  public courses: ICourse[] = coursesMock;

  constructor() { }

  getAll(): Observable<ICourse[]> {
    return of(this.courses);
  }

  getOne(id: string): Observable<ICourse> {
    return of(this.courses.find(c => c.id == id) as ICourse);
  }

  create(newCourse: ICourseDTO): Observable<string> {
    const id = Math.max(...this.courses.map(c => Number(c.id)));
    this.courses.push({ id: id.toString(), ...newCourse });
    return of(`${id} Course Created`);
  }

  update(
    id: string,
    updatedCourse: ICourseDTO
  ): Observable<string> {
    this.courses = this.courses.map((course: ICourse) => {
      return course.id === id ? { id: id, ...updatedCourse } : course;
    });
    return of(`${id} Course Updated!`);
  }

  delete(id: string): Observable<string> {
    this.courses = this.courses.filter(c => c.id !== id);
    return of(`${id} Course Deleted!`);
  }
}
