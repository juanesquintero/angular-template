import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material.module';
import { AppFormsModule } from '@shared/forms.module';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';


@NgModule({
  declarations: [
    HomeComponent,
    LoginModalComponent,
  ],
  exports: [
    HomeComponent,
    LoginModalComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppFormsModule,
  ],
  providers: [ HomeService ],
})
export class FeaturesModule { }
