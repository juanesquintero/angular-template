import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { ICourse, ICoursesListParams, ICourseDTO } from '@shared/models/course.model';
import { catchError, EMPTY, Observable, switchMap, tap } from 'rxjs';
import { CoursesService } from '../services/courses.service';

export interface CoursesState {
  courses: ICourse[];
}

type DeleteParam = { id: number, count: number };
type UpdateParam = { id: number, course: ICourse };

@Injectable()
export class CoursesStore extends ComponentStore<CoursesState> {

  constructor(
    private coursesService: CoursesService,
    private router: Router
  ) {
    super({ courses: [] });
  }

  readonly courses$: Observable<ICourse[]> = this.select(state => state.courses);

  readonly getCourses = this.effect((params$: Observable<ICoursesListParams>) => {
    return params$.pipe(
      switchMap((params: ICoursesListParams) =>
        this.coursesService.getList({ ...params }).pipe(
          tap({
            next: (courses) => this.refreshCourses(courses)
          }),
          catchError(() => EMPTY),
        )),
    );
  });

  readonly deleteCourse = this.effect((params$: Observable<DeleteParam>) => {
    return params$.pipe(
      switchMap((params: DeleteParam) =>
        this.coursesService.delete(params.id).pipe(
          tap({
            next:(course) => {
              alert('COURSE Deleted!');
              this.getCourses({start: 0, count: params.count})
            }
          }),
          catchError(() => EMPTY),
        )),
    );
  });

  readonly updateCourse = this.effect((params$: Observable<UpdateParam>) => {
    return params$.pipe(
      switchMap((params: UpdateParam) =>
        this.coursesService.update(params.id, params.course).pipe(
          tap({
            next:(course) => {
              alert('COURSE Updated!');
              this.router.navigate(['courses']);
            },
          }),
          catchError(() => EMPTY),
        )),
    );
  });

  readonly createCourse = this.effect((params$: Observable<ICourseDTO>) => {
    return params$.pipe(
      switchMap((params: ICourseDTO) =>
        this.coursesService.create(params).pipe(
          tap({
            next:(course) => {
              alert('COURSE created!');
              this.router.navigate(['courses']);
            },
          }),
          catchError(() => EMPTY),
        )),
    );
  });

  readonly refreshCourses = this.updater(
    (state, courses: ICourse[]) => ({ courses })
  );
}
