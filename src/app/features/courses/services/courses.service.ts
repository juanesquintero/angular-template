import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { coursesMock } from '@shared/mocks/courses.mock';
import { ICourse } from '@shared/models/course.model';

@Injectable()
export class CoursesService {

  public courses: ICourse[] = coursesMock;

  constructor() { }

  getAll(): Observable<ICourse[]> {
    return of(this.courses);
  }

  getOne(id: string) { }

  create(newCourse: ICourse) { }

  update(id: string, updatedCourse: ICourse) { }

  delete(id: string): Observable<string> {
    this.courses = this.courses.filter(c => c.id !== id);
    return of(`${id} Course Deleted!`);
  }
}
