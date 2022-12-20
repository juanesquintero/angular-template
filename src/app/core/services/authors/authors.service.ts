import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@src/environments/environment';
import { IAuthor } from '@shared/models/course.model';


@Injectable()
export class AuthorsService {
  private endpoint = environment.api_path + '/authors';

  constructor(private http: HttpClient) { }

  getList(textFragment?: string): Observable<IAuthor[]> {
    const params = JSON.parse(JSON.stringify({ textFragment }));
    return this.http.get<IAuthor[]>(this.endpoint, { params });
  }
}
