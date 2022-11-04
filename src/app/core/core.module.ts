import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    LogoComponent
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
