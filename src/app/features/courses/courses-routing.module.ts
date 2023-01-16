import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth/auth.guard';
import { CoursesListComponent } from '@courses/components/list/courses-list.component';
import { CourseAddEditComponent } from './components/add-edit/course-add-edit.component';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesListComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumb: 'ws.courses.breadcrumb',
    },
  },
  {
    path: 'courses/new',
    component: CourseAddEditComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumb: 'ws.courses.add_edit.breadcrumbs.new_course',
    },
  },
  {
    path: 'courses/:id',
    component: CourseAddEditComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumb: 'ws.courses.add_edit.breadcrumbs.edit_course',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
