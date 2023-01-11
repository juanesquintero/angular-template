import { AuthService } from 'src/app/core/services/auth/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { DateHihglightDirective } from './directives/date-hihglight/date-hihglight.directive';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';
import { FilterByPipe } from './pipes/filter-by/filter-by.pipe';
import { IfAuthenticatedDirective } from './directives/if-authenticated/if-authenticated.directive';
import { AuthorsService } from './services/authors/authors.service';
import { TokenInterceptor } from './interceptors/token/token.interceptor';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingInterceptor } from './interceptors/loading/loading.interceptor';


@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    LogoComponent,
    DateHihglightDirective,
    DurationPipe,
    OrderByPipe,
    FilterByPipe,
    IfAuthenticatedDirective,
    LoadingComponent,
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    LoadingComponent,
    DateHihglightDirective,
    DurationPipe,
    OrderByPipe,
    FilterByPipe,
    IfAuthenticatedDirective,
  ],
  providers: [
    FilterByPipe,
    AuthService,
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
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class CoreModule { }
