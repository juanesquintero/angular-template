import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseNewComponent } from '@courses/components/new/course-new.component';
import { CoursesListComponent } from '@courses/components/list/courses-list.component';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesListComponent,
  },
  {
    path: 'courses/new',
    component: CourseNewComponent,
    title: 'Courses / New Course',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
