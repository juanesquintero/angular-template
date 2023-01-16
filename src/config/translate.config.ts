import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export const HTTPLoaderactory = (http: HttpClient): TranslateHttpLoader => {
  return new TranslateHttpLoader(http);
}

export const TranslateAppModule = TranslateModule.forChild({
  loader: {
    provide: TranslateLoader,
    useFactory: HTTPLoaderactory,
    deps: [HttpClient]
  },
})

export interface ILangOption {
  code: string;
  language: string;
  country: string;
  flag: string;
};


export const DEFAULT_LANG: ILangOption = {
  code: 'en-US',
  language: 'English',
  country: 'United States',
  flag: '🇺🇸'
}


export const LANGUAGE_OPTIONS: ILangOption[] = [
  DEFAULT_LANG,
  {
    code: 'es-CO',
    language: 'Español',
    country: 'Colombia',
    flag: '🇨🇴',
  }
];
