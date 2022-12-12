import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@features/home/home.component';
import { HomeService } from '@features/home/home.service';
import { MaterialModule } from './shared/material.module';
import { AppComponent } from './app.component';
import { AppFormsModule } from './shared/forms.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { _authReducer } from './shared/store/reducers/auth.reducer';
import { AuthEffects } from './shared/store/effects/auth.effect';

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
    StoreModule.forRoot({ auth: _authReducer }),
    EffectsModule.forRoot([ AuthEffects ]),
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
