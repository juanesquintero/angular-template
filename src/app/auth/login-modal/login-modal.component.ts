import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { AuthService } from '../auth.service';
import * as AuthActions from '../../store/actions/auth.action';
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public showPassword: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<LoginModalComponent>,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private store: Store,
  ) { }


  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  submit(): void {
    console.log(this.store.dispatch(AuthActions.loginRequest(this.form.value)));
    this.store.dispatch(AuthActions.loginRequest(this.form.value))
    // this.authService.login(this.form.value).subscribe({
    //   next: data => {
    //     // TODO login logic NGRX
    //     this.dialogRef.close();
    //   },
    //   error: err => {
    //     const errMsg = err.error?.message || err.message
    //     this._snackBar.open(errMsg, '', { panelClass: ['snackbar--error'] });
    //   }
    // })
  }

}
