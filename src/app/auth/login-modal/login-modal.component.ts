import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';

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
    private authService: AuthService,
    private _snackBar: MatSnackBar,
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
    this.authService.login(this.form.value).subscribe({
      next: data => {
        // TODO login logic NGRX
        this.dialogRef.close();
      },
      error: err => {
        const errMsg = err.error?.message || err.message
        this._snackBar.open(errMsg, '', { panelClass: ['snackbar--error'] });
      }
    })
  }

}
