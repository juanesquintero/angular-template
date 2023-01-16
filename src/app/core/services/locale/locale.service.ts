import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { LANGUAGE_OPTIONS } from '@src/config/translate.config';
import { ReplaySubject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  public locale: string;
  public languages = LANGUAGE_OPTIONS;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private translateService: TranslateService) {
    this.locale = translateService.currentLang || translateService.defaultLang;
  }

  changeLang($event: string): void {
    this.translateService.use($event);
  }

  subcribe() {
    this.translateService.onLangChange
      .pipe(
        takeUntil(this.destroyed$),
      )
      .subscribe((langChangeEvent: LangChangeEvent) => {
        this.locale = langChangeEvent.lang;
      })
  }

  unsubscribe() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
