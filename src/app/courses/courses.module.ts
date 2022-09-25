import { CoursesRoutingModule } from './courses-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './list/courses-list.component';
import { CoursesService } from './courses.service';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  declarations: [
    CoursesListComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MaterialModule,
  ],
  providers: [CoursesService]
})
export class CoursesModule { }
