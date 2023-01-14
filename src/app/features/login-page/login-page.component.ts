import { AuthService } from '@core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ws-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup =  new FormGroup({});

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      login: new FormControl('flastname', [Validators.required]),
      password: new FormControl('flastname', [Validators.required, Validators.minLength(8)]),
    });
  }

  onLogin(): void {
    this.authService.login(this.form.value);
  }
}
