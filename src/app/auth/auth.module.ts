
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { AuthService } from './auth.service';
import { MaterialModule } from '../shared/material.module';
import { AppFormsModule } from '../shared/forms.module';


@NgModule({
  declarations: [ LoginModalComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    AppFormsModule,
  ],
  providers: [ AuthService],
})
export class AuthModule { }
