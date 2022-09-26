import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { ICourseDTO, ICourseRow, ICoursesTable } from '../../shared/models/courses.model';
import { CoursesService } from '../courses.service';
import { MatDialog } from '@angular/material/dialog';
import { CourseModalComponent } from '../modal/course-modal.component';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  public courses: ICourseDTO[] = [];
  public table: ICoursesTable = { rows: [], columns: [] };
  private rowsFn = (c: ICourseDTO): ICourseRow => (
    { id: c.id, title: c.title, price: c.price }
  );

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe((res: ICourseDTO[]) => {
      this.courses = res;
      this.table.rows = res.map(this.rowsFn);
      this.table.columns = [...Object.keys(this.table.rows[0]), 'actions'];
    });
  }

  get admin(): boolean {
    // TODO: ngrx for user/session info
    return false;
  }

  openModal(courseId: string ) {
    const selectedCourse = _.find(this.courses, { id: courseId });
    const dialogRef = this.dialog.open(CourseModalComponent, {
      width: '16rem',
      data: {
        course: selectedCourse,
        options: {
          editMode: this.admin,
          newMode: false,
        }
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The MODAL was closed');
    });
  }
}
