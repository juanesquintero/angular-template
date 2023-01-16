import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { DEFAULT_LANG, LANGUAGE_OPTIONS, ILangOption } from '@src/config/translate.config';
import { lastValueFrom, ReplaySubject, takeUntil } from 'rxjs';
import { registerLocaleData } from '@angular/common';
import localeEsCo from '@angular/common/locales/es-CO';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  public locale: string;
  public languages = LANGUAGE_OPTIONS;
  public defaultLang: string = DEFAULT_LANG.code;

  get langsCodes(): string[] {
    return LANGUAGE_OPTIONS.map((lang: ILangOption) => lang.code)
  }

  constructor(private translateService: TranslateService) {
    this.initConfig();
    this.locale = translateService.currentLang || translateService.defaultLang;
  }

  initConfig(): void {
    this.translateService.addLangs(this.langsCodes);
    this.translateService.setDefaultLang(this.defaultLang);
    this.translateService.use(this.defaultLang);
    registerLocaleData(localeEsCo, 'es-CO');
  }

  async changeLang(langCode: string): Promise<void> {
    await lastValueFrom(this.translateService.use(langCode));
    this.locale = langCode;
  }

  subcribe() {
    this.translateService.onLangChange
      .pipe(
        takeUntil(this.destroyed$),
      )
      .subscribe((langChangeEvent: LangChangeEvent) => {
        this.locale = langChangeEvent.lang;
        this.translateService.use(langChangeEvent.lang);
      })
  }

  unsubscribe() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  translate(ref: string): string {
    return this.translateService.instant(ref);
  }
}
