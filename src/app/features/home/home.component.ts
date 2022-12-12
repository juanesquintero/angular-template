import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HomeService } from './home.service';
import { IAppName } from '@shared/models';
import { APP_NAME } from '@shared/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  public title: string = APP_NAME;

  public get init() : boolean {
    return this.title === APP_NAME
  }

  constructor(private homeService: HomeService) { }

  ngOnInit(): void { }

  showAppName(): void {
    if (this.init) {
      this.homeService.getAppName().subscribe((res: IAppName) => {
        this.title = res.api.toUpperCase();
      });
    }
  }
}
