<<<<<<< HEAD
import { Component, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
=======
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
>>>>>>> 4000ad3 (feat: api connection)
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
=======
import { AppComponent } from './app.component';
import { AppService } from './app.service';
>>>>>>> 4000ad3 (feat: api connection)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title: string = 'angular-template';
}
@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeComponent,
=======
>>>>>>> 4000ad3 (feat: api connection)
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
<<<<<<< HEAD
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [HomeService],
=======
    AppRoutingModule
  ],
  providers: [AppService],
>>>>>>> 4000ad3 (feat: api connection)
  bootstrap: [AppComponent]
})
export class AppModule { }
