import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAppName } from '@shared/models';
import { environment } from '@environments/environment';


@Injectable()
export class HomeService {

  private apiPath: string = environment.apiPath;

  constructor(private http: HttpClient) { }

  getAppName(): Observable<IAppName> {
    return this.http.get<IAppName>(this.apiPath);
  }
}
