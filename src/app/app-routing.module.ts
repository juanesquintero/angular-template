import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from '@features/courses/components/list/courses-list.component';
import { LoginPageComponent } from '@features/login-page/login-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'courses',
    component: CoursesListComponent
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
