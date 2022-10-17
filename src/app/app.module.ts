import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import { MaterialModule } from './shared/material.module';
import { AppComponent } from './app.component';
import { LoginModalComponent } from './auth/login-modal/login-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginModalComponent,
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
