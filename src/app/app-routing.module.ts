import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '@features/login-page/login-page.component';
import { CoursesRoutingModule } from '@courses/courses-routing.module';
import { NotFoundPageComponent } from '@features/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPageComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking'
    }),
    CoursesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
