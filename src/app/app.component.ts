import { AuthService } from '@core/services/auth/auth.service';
import { LocaleService } from '@core/services/locale/locale.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from '@core/services/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public loading?: Observable<boolean>;

  constructor(
    private loadingService: LoadingService,
    private locale: LocaleService,
  ) {
    locale.initConfig();
  }

  ngOnInit(): void {
    this.listenToLoading();
  }

  listenToLoading(): void {
    this.loading = this.loadingService.isLoading;
  }
}
