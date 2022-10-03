import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HomeService } from './home.service';
import { APP_ROUTES } from '../shared/constants';
import { IAppName } from '../shared/models';

const initialAppName = 'Angular Template';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  public appName: string = initialAppName;
  public routes = APP_ROUTES;

  public get init() : boolean {
    return this.appName === initialAppName
  }


  constructor(private homeService: HomeService) { }

  ngOnInit(): void { }

  showAppName(): void {
    if (this.init) {
      this.homeService.getAppName().subscribe((res: IAppName) => {
        this.appName = res.api.toUpperCase();
      });
    }
  }
}
