import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@src/app/shared/shared.module';
import { CoursesService } from '@courses/services/courses.service';
import { CourseItemComponent } from '@courses/components/item/course-item.component';
import { CoursesListComponent } from '@courses/components/list/courses-list.component';
import { CoursesSectionComponent } from '@courses/components/search-section/courses-search-section.component';
import { RouterModule } from '@angular/router';
import { CourseAddEditComponent } from './components/add-edit/course-add-edit.component';


@NgModule({
  declarations: [
    CoursesListComponent,
    CoursesSectionComponent,
    CourseItemComponent,
    CourseAddEditComponent,
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
    RouterModule,
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesModule { }
