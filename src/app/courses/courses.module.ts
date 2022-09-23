import { CoursesRoutingModule } from './courses-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './list/courses-list.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { CoursesService } from './courses.service';



@NgModule({
  declarations: [
    CoursesListComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatSortModule,
    MatTableModule,
  ],
  providers: [CoursesService]
})
export class CoursesModule { }
