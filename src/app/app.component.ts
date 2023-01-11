import { delay, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from '@core/services/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'Video Course';
  public loading?: Observable<boolean>;

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.listenToLoading();
  }

  listenToLoading(): void {
    this.loading = this.loadingService.isLoading;
  }
}
