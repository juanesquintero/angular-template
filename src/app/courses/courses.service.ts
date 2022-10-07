import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAppName } from '../shared/models';
import { environment } from './../../environments/environment';
import { APP_ROUTES } from '../shared/constants';
import { ICourseBase, ICourseDTO } from '../shared/models/courses.model';


@Injectable()
export class CoursesService {

  private apiPath: string = environment.apiPath;
  private endpoint: string = '/' + APP_ROUTES.courses;

  constructor(private http: HttpClient) { }

  getCourses(): Observable<ICourseDTO[]> {
    return this.http.get<ICourseDTO[]>(this.apiPath + this.endpoint);
  }

  putCourse(courseId: string, courseData: ICourseBase): Observable<ICourseDTO> {
    return this.http.put<ICourseDTO>(this.apiPath + this.endpoint + '/' + courseId, courseData);
  }

  // deleteCourse(courseId: string): Observable<ICourseDTO> {
  //   return this.http.delete<ICourseDTO>(this.apiPath + this.endpoint + '/' + courseId);
  // }
}
