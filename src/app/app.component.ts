import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'angular-template';
  public appName: string = 'Angular Template';

  constructor(private appService: AppService) {}

  async showAppName(): Promise<void> {
    // this.appName = 'Academy';
    await this.appService.getAppName().subscribe(appName => {
      this.appName = appName.api;
    });
  }
}
