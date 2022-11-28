import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core/core.module';
import { CoursesService } from '@courses/services/courses.service';
import { CourseItemComponent } from '@courses/components/item/course-item.component';
import { CoursesListComponent } from '@courses/components/list/courses-list.component';
import { CourseNewComponent } from '@src/app/features/courses/components/new/course-new.component';
import { CoursesSectionComponent } from '@courses/components/search-section/courses-search-section.component';
import { SharedModule } from '@src/app/shared/shared.module';


@NgModule({
  declarations: [
    CoursesListComponent,
    CoursesSectionComponent,
    CourseItemComponent,
    CourseNewComponent,
  ],
  exports: [
    CoursesListComponent,
    CoursesSectionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    SharedModule,
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesModule { }
