import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICourse, ICourseDTO, ICoursesListParams } from '@shared/models/course.model';
import { environment } from '@src/environments/environment';

@Injectable()
export class CoursesService {

  private endpoint = environment.api_path + '/courses';

  constructor(private http: HttpClient) { }

  getList(params: ICoursesListParams): Observable<ICourse[]> {
    const queryParams = { ...params };
    const validParams = JSON.parse(JSON.stringify(queryParams));
    return this.http.get<ICourse[]>(
      this.endpoint,
      { params: validParams }
    );
  }

  getOne(id: number): Observable<ICourse> {
    return this.http.get<ICourse>(this.endpoint + '/' + id);
  }

  create(newCourse: ICourseDTO): Observable<ICourse> {
    return this.http.post<ICourse>(this.endpoint, newCourse);
  }

  update(id: number, updatedCourse: ICourseDTO): Observable<ICourse> {
    return this.http.patch<ICourse>(this.endpoint + '/' + id, updatedCourse);
  }

  delete(id: number): Observable<ICourse> {
    return this.http.delete<ICourse>(this.endpoint + '/' + id);
  }
}
