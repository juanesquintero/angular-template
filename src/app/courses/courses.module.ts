import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesListComponent } from './list/courses-list.component';
import { CoursesSectionComponent } from './search-section/courses-search-section.component';
import { CourseItemComponent } from './item/course-item.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    CoursesListComponent,
    CoursesSectionComponent,
    CourseItemComponent,
  ],
  exports: [
    CoursesListComponent,
    CoursesSectionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
  ]
})
export class CoursesModule { }
