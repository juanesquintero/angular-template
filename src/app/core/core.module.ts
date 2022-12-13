import { AuthService } from 'src/app/core/services/auth/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { DateHihglightDirective } from './directives/date-hihglight/date-hihglight.directive';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';
import { FilterPipeBy } from './pipes/filter-by/filter-by.pipe';
import { IfAuthenticatedDirective } from './directives/if-authenticated/if-authenticated.directive';


@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    LogoComponent,
    DateHihglightDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipeBy,
    IfAuthenticatedDirective,
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    DateHihglightDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipeBy,
    IfAuthenticatedDirective,
  ],
  providers: [
    FilterPipeBy,
    AuthService
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }