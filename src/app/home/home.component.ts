import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { APP_ROUTES } from '../shared/constants';
import { IAppName, IAppRoute } from '../shared/models';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  public title: string = 'angular-template';
  public appName: string = this.title.replace('-', ' ').toUpperCase();
  public routes = APP_ROUTES;

  constructor(
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  showAppName(): void {
    this.homeService.getAppName().subscribe((appName: IAppName) => {
      this.appName = appName.api.toUpperCase();
    });
    this.goTo(this.routes.courses as IAppRoute);
  }

  goTo(route: IAppRoute | string): void {
    route = route as IAppRoute;
    this.router.navigate([route]);
  }
}
