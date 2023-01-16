import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { CoursesModule } from '@courses/courses.module';
import { LoginPageComponent } from '@features/login-page/login-page.component';
import { NotFoundPageComponent } from './features/not-found-page/not-found-page.component';
import { StoreModule } from '@ngrx/store';
import { authReducer } from '@store/reducers/auth.reducer';
import { AuthEffects } from '@store/effects/auth.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { TranslateAppModule } from '@src/config/translate.config';
import { TranslateStore } from '@ngx-translate/core';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    CoursesModule,
    StoreModule.forRoot({ auth: authReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([AuthEffects]),
    TranslateAppModule,
  ],
  providers: [TranslateStore],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
