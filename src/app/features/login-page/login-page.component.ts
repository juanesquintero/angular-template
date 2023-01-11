import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginRequest } from '@core/store/actions/auth.action';
import { ICredentials } from '@shared/models/auth.model';

@Component({
  selector: 'ws-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public email: string = 'flastname';
  public password: string = 'flastname';

  constructor(private store: Store) {}

  ngOnInit(): void {}

  onLogin(): void {
    const credentials: ICredentials = {
      login: this.email,
      password: this.password
    };
    this.store.dispatch(loginRequest(credentials));
  }
}
