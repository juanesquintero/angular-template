import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';


@Injectable()
export class AuthService {
  private endpoint: string = environment.apiPath + '/auth';

  constructor(private http: HttpClient) { }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(this.endpoint + '/login', credentials);
  }

  singup(userData: any): Observable<any> {
    return this.http.post<any>(this.endpoint + '/singup', userData);
  }
}
