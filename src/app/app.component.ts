import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title: string = 'angular-template';
  public appName: string = this.title.replace('-', ' ').toUpperCase();

  constructor(private appService: AppService) {}

  showAppName(): void {
    this.appService.getAppName().subscribe(appName => {
      this.appName = appName.api.toUpperCase();
    });
  }
}
