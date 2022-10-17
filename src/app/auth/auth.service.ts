import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAppName } from '../shared/models';
import { environment } from '../../environments/environment';
import { APP_ROUTES } from '../shared/constants';


@Injectable()
export class AuthService {
  private endpoint: string = environment.apiPath + '/auth';

  constructor(private http: HttpClient) { }

  login(): Observable<any> {
    return this.http.post<any>(this.endpoint + '/login' , {});
  }

  register(userData: any): Observable<any> {
    return this.http.post<any>(this.endpoint + '/register' , userData);
  }
}
