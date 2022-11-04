import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './list/courses-list.component';
import { CoursesSectionComponent } from './section/courses-section.component';


@NgModule({
  declarations: [
    CoursesListComponent,
    CoursesSectionComponent,
  ],
  exports: [
    CoursesListComponent,
    CoursesSectionComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }
