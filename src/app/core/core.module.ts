import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { AuthorsService } from './services/authors/authors.service';
import { TokenInterceptor } from './interceptors/token/token.interceptor';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingInterceptor } from './interceptors/loading/loading.interceptor';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { AuthLocalService } from './services/auth/auth.service.local';
import { SharedModule } from '../shared/shared.module';
import { TranslateAppModule } from '@src/config/translate.config';
import { TranslateStore } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { LangSelectorComponent } from './components/lang-selector/lang-selector.component';
import { SessionPanelComponent } from './components/session-panel/session-panel.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    LogoComponent,
    LoadingComponent,
    LangSelectorComponent,
    SessionPanelComponent,
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    LoadingComponent,
  ],
  providers: [
    AuthService,
    AuthLocalService,
    AuthorsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
    TranslateStore
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    TranslateAppModule
  ],
})
export class CoreModule { }
