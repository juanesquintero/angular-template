import { CoursesRoutingModule } from './courses-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './list/courses-list.component';
import { CoursesService } from './courses.service';
import { MaterialModule } from '../shared/material.module';
import { CourseModalComponent } from './modal/course-modal.component';
import { AppFormsModule } from '../shared/forms.module';



@NgModule({
  declarations: [
    CoursesListComponent,
    CourseModalComponent
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
