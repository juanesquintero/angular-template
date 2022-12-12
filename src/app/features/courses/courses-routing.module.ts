import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './list/courses-list.component';

const coursesRoutes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    component: CoursesListComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(coursesRoutes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
