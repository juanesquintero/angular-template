import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

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
    private formBuilder: FormBuilder
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
    console.log(this.form);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
