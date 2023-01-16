import { DEFAULT_LANG } from './../config/translate.config';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from '@core/services/loading/loading.service';
import { TranslateService } from '@ngx-translate/core';
import { registerLocaleData } from '@angular/common';
import localeEsCo from '@angular/common/locales/es-CO';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public loading?: Observable<boolean>;

  constructor(
    private loadingService: LoadingService,
    private translate: TranslateService,
  ) {
    translate.setDefaultLang(DEFAULT_LANG.code);
    registerLocaleData(localeEsCo, 'es-CO');
  }

  ngOnInit(): void {
    this.listenToLoading();
  }

  listenToLoading(): void {
    this.loading = this.loadingService.isLoading;
  }
}
