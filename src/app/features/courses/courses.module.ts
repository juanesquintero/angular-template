import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesListComponent } from '@features/courses/components/list/courses-list.component';
import { CoursesSectionComponent } from '@features/courses/components/search-section/courses-search-section.component';
import { CourseItemComponent } from './components/item/course-item.component';
import { CoursesService } from '@features/courses/services/courses.service';
import { CoreModule } from '@core/core.module';


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
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesModule { }
