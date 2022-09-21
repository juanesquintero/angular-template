import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HomeService } from './home.service';
import { APP_ROUTES } from '../shared/constants';
import { IAppName } from '../shared/models';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  public appName: string = 'Angular Template';
  public routes = APP_ROUTES;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void { }

  showAppName(): void {
    this.homeService.getAppName().subscribe((appName: IAppName) => {
      this.appName = appName.api.toUpperCase();
    });
  }
}
