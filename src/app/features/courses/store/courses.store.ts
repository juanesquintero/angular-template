import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { ICourse, ICoursesListParams, ICourseDTO } from '@shared/models/course.model';
import { catchError, EMPTY, Observable, switchMap, tap } from 'rxjs';
import { CoursesService } from '../services/courses.service';

export interface CoursesState {
  courses: ICourse[];
  courseSelected: ICourse;
}

type DeleteParam = { id: number, count: number };
type UpdateParam = { id: number, course: ICourse };

@Injectable()
export class CoursesStore extends ComponentStore<CoursesState> {

  constructor(
    private coursesService: CoursesService,
    private router: Router
  ) {
    super({
      courses: [],
      courseSelected: {} as ICourse,
    });
  }

  readonly courses$: Observable<ICourse[]> = this.select(state => state.courses);
  readonly course$: Observable<ICourse> = this.select(state => state.courseSelected);

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

  readonly getCourse = this.effect((id$: Observable<number>) => {
    return id$.pipe(
      switchMap((id: number) =>
        this.coursesService.getOne(id).pipe(
          tap({
            next: (course) => {
              this.selectCourse(course);
              this.addCourse(course);
            }
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

  readonly selectCourse = this.updater(
    (state, course: ICourse) => ({ courses: state.courses, courseSelected: course })
  );

  readonly refreshCourses = this.updater(
    (state, courses: ICourse[]) => ({ courses, courseSelected: state.courseSelected })
  );

  readonly addCourse = this.updater(
    (state, course: ICourse) => ({ courses: [course, ...state.courses], courseSelected: state.courseSelected })
  );
}
