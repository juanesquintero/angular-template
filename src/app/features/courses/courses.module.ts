import { CoursesRoutingModule } from './courses-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './components/list/courses-list.component';
import { CoursesService } from './services/courses.service';
import { CourseModalComponent } from './components/modal/course-modal.component';
import { MaterialModule } from '@shared/material.module';
import { AppFormsModule } from '@shared/forms.module';



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
