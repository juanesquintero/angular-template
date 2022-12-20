import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';

@Component({
  selector: 'ws-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public email: string = 'flastname';
  public password: string = 'flastname';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {}

  onLogin(): void {
    this.authService.login({
      login: this.email,
      password: this.password
    });
    this.router.navigate(['courses']);
  }
}
