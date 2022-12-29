import { AuthGuard } from './../../core/guards/auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from '@courses/components/list/courses-list.component';
import { CourseAddEditComponent } from './components/add-edit/course-add-edit.component';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'courses/new',
    component: CourseAddEditComponent,
    title: 'Courses / New Course',
    canActivate: [AuthGuard]
  },
  {
    path: 'courses/:id',
    component: CourseAddEditComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
