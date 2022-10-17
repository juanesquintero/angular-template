
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [ LoginModalComponent ],
  imports: [
    CommonModule
  ],
  providers: [ AuthService]
})
export class AuthModule { }
