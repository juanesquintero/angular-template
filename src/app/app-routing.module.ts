import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@features/home/home.component';
import { APP_ROUTES } from './shared/constants';


const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'courses',
    runGuardsAndResolvers: 'always',
    pathMatch: 'full',
    loadChildren: () => import('@courses/courses.module').then(x => x.CoursesModule)
  },
  {
    path: '**',
    runGuardsAndResolvers: 'always',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
