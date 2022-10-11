import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IAction, IModalMode } from '../../shared/models';
import { ICourseBase, ICourseDTO, ICourseRow, ICoursesTable } from '../../shared/models/courses.model';
import { CoursesService } from '../courses.service';
import { CourseModalComponent } from '../modal/course-modal.component';

type IModalResult = { course: ICourseDTO, action: IAction };
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

  get isAdmin(): boolean {
    // TODO: ngrx for user/session info
    return true;
  }

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
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

  openModal(mode: IModalMode, courseId?: string) {
    const selectedCourse = _.find(this.courses, { id: courseId });
    const modalData = { course: selectedCourse, mode: mode };
    const dialogRef = this.dialog.open(CourseModalComponent, {
      width: '18rem',
      data: modalData
    });
    this.onCloseModal(dialogRef);
  }

  onCloseModal(dialogRef: MatDialogRef<CourseModalComponent>): void {
    dialogRef.afterClosed().subscribe((result: IModalResult) => {
      if (result) {
        this.actionTrigger(result);
      }
    });
  }

  actionTrigger(result: IModalResult){
    const { action, course } = result;
    (this[action](course) as Observable<any>).subscribe(
      (res: ICourseDTO) => {
        this.actionMsg(action);
      },
      err => {
        this.actionMsg(action, true);
      }
    );
  }

  actionMsg(action: string, err=false) {
    if (err) {
      this._snackBar.open(`${action} Error`, '', { panelClass: ['snackbar--error'] });
    } else {
      this._snackBar.open(`${action}d`, '', { panelClass: ['snackbar--success'] });
    }
  }

  update(courseToUpdate: ICourseDTO): Observable<ICourseDTO> {
    const { id, ...course } = courseToUpdate;
    return this.coursesService.putCourse(id, course);
  }

  delete(courseToDelete: ICourseDTO): Observable<ICourseDTO> {
    const { id, ...course } = courseToDelete;
    return this.coursesService.deleteCourse(id);
  }

  create(courseToCreate: ICourseBase): Observable<ICourseDTO> {
    return this.coursesService.postCourse(courseToCreate);
  }
}
