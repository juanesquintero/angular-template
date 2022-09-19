import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'angular-template';
  public appName: string = this.title;

  constructor(private appService: AppService) {}

  showAppName(): void {
    this.appService.getAppName().subscribe(appName => {
      this.appName = appName.api.toUpperCase();
    });
  }
}
