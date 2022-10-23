import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import { MaterialModule } from './shared/material.module';
import { AppComponent } from './app.component';
import { AppFormsModule } from './shared/forms.module';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppFormsModule,
    AuthModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
