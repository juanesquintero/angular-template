import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAppName } from '../shared/models';


@Injectable()
export class HomeService {

  private apiPath: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getAppName(): Observable<IAppName> {
    return this.http.get<IAppName>(this.apiPath);
  }
}
