import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface IAppName {
  api: string;
}

@Injectable()
export class AppService {

  private apiPath: string = 'http://localhost:3000'

  constructor(private http: HttpClient) {}

  getAppName(): Observable<IAppName> {
    return this.http.get<IAppName>(this.apiPath);
  }
}
