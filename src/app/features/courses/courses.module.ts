import { CoursesRoutingModule } from './courses-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './components/list/courses-list.component';
import { CoursesService } from './courses.service';
import { CourseModalComponent } from './modal/course-modal.component';
import { MaterialModule } from '@shared/material.module';
import { AppFormsModule } from '@shared/forms.module';
import { CourseItemComponent } from './components/item/course-item.component';


@NgModule({
  declarations: [
    CoursesListComponent,
    CourseModalComponent,
    CourseItemComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MaterialModule,
    AppFormsModule
  ],
  providers: [CoursesService]
})
export class CoursesModule { }
