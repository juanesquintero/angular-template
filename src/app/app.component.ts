import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-template';
  public appName: string = 'Angular Template';

  showAppName(): void {
    this.appName = 'Academy';
  }
}
