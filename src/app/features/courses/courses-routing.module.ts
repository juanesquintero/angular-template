import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from '@courses/components/list/courses-list.component';
import { CourseAddEditComponent } from './components/add-edit/course-add-edit.component';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesListComponent,
  },
  {
    path: 'courses/new',
    component: CourseAddEditComponent,
    title: 'Courses / New Course',
  },
  {
    path: 'courses/:id',
    component: CourseAddEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
