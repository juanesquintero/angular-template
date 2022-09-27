import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { ICourseDTO, ICourseRow, ICoursesTable } from '../../shared/models/courses.model';
import { CoursesService } from '../courses.service';
import { MatDialog } from '@angular/material/dialog';
import { CourseModalComponent } from '../modal/course-modal.component';
import { IModalMode } from '../../shared/models';

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

  get admin(): boolean {
    // TODO: ngrx for user/session info
    return true;
  }

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses(): void {
    this.coursesService.getCourses().subscribe((res: ICourseDTO[]) => {
      this.courses = res;
      this.table.rows = res.map(this.rowsFn);
      this.table.columns = [...Object.keys(this.table.rows[0]), 'actions'];
    });
  }

  openModal(
    courseId: string,
    mode: IModalMode,
    action: any = null,
    msg: string = ''
  ) {
    const selectedCourse = _.find(this.courses, { id: courseId });
    const dialogRef = this.dialog.open(CourseModalComponent, {
      width: '18rem',
      data: {
        course: selectedCourse,
        options: {
          mode: mode,
          action: action,
          message: msg,
        }
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      alert(result + '\n' + msg);
    });
  }

  detail(courseId: string): void {
    this.openModal(courseId, 'detail');
  }

  edit(courseId: string): void {
    this.openModal(courseId, 'edit', this.coursesService.putCourse, 'Course Updated')
  }

  // remove(courseId: string): void {
  //   this.openModal(courseId, 'remove', this.coursesService.deleteCourse, 'Course Deleted');
  // }
}
