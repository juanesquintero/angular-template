import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'lodash-es';
import { ActivatedRoute, Router } from '@angular/router';
import { ACTIONS, COURSE_ACTIONS } from '@src/app/shared/constants';
import { CoursesService } from '@courses/services/courses.service';
import { AuthorsService } from '@core/services/authors/authors.service';
import { IAuthor, IAuthorOpt, ICourse, ICourseAction } from '@shared/models/course.model';


@Component({
  selector: 'ws-course-add-edit',
  templateUrl: './course-add-edit.component.html',
  styleUrls: ['./course-add-edit.component.scss']
})
export class CourseAddEditComponent implements OnInit {
  public action?: ICourseAction;
  public course: ICourse = {} as ICourse;
  public courseId?: number;
  public tagsOptions?: any;
  public authors?: IAuthor[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private authorsService: AuthorsService,
  ) {
    this.defineAction();
    if (this.isEdition) {
      this.getCourse();
    }
    this.getAuthors();
  }

  get isEdition(): boolean {
    return this.action?.value == ACTIONS.edit;
  }

  get isAddition(): boolean {
    return this.action?.value == ACTIONS.add;
  }

  get authorsOptions(): [IAuthorOpt[], IAuthorOpt[]] {
    const func = (a: IAuthor) => ({ value: a.name, ...a });
    const allAuthors = this.authors?.map(func) || [];
    const selectedAuthors = this.course.authors?.map(func) || [];
    return [allAuthors, selectedAuthors];
  }

  ngOnInit(): void { }

  defineAction() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.action = COURSE_ACTIONS.edit;
    } else {
      this.action = COURSE_ACTIONS.add;
    }
  }

  getCourse(): void {
    this.courseId = Number(this.route.snapshot.paramMap.get('id')) || 0;
    if (this.courseId) {
      this.coursesService.getOne(this.courseId).subscribe((course: ICourse) => {
        this.course = course;
      });
    }
  }

  getAuthors(): void {
    this.authorsService.getList().subscribe(res => {
      this.authors = res
    });
  }

  onSubmit(): void {
    if (isEmpty(this.course)) {
      alert('Invalid Course');
      return;
    }

    if (this.isEdition) {
      this.update();
    } else if (this.isAddition) {
      this.create();
    } else {
      alert('Please specify valid action');
    }
  }

  goToList() {
    this.router.navigate(['courses']);
  }

  update() {
    if (this.courseId) {
      this.coursesService.update(
        this.courseId,
        this.course
      ).subscribe(res => this.goToList());
    }
  }

  create() {
    this.coursesService.create(
      this.course
    ).subscribe(res => this.goToList());
  }
}
