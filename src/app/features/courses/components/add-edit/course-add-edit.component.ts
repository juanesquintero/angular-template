import { CoursesStore } from '@courses/store/courses.store';
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
  styleUrls: ['./course-add-edit.component.scss'],
  providers: [CoursesStore],
})
export class CourseAddEditComponent implements OnInit {
  public action?: ICourseAction;
  public course: ICourse = {} as ICourse;
  public courseId?: number;
  public tagsOptions?: any;
  public authors?: IAuthor[];
  public authorsSelected?: IAuthorOpt[];
  public authorsOptions?: IAuthorOpt[];

  get isEdition(): boolean {
    return this.action?.value == ACTIONS.edit;
  }

  get isAddition(): boolean {
    return this.action?.value == ACTIONS.add;
  }

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private authorsService: AuthorsService,
    private coursesStore: CoursesStore,
  ) {
    this.defineAction();
    if (this.isEdition) {
      this.getCourse();
    }
    this.getAuthors();
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
        this.authorsSelected = this.course.authors?.map(
          (a: IAuthor) => {
            const name = a.name + ' ' + a.lastName;
            return { id: String(a.id), name, value: name }
          }
        ) || [];
      });
    }
  }

  getAuthors(): void {
    this.authorsService.getList().subscribe(res => {
      this.authorsOptions = res.map((a: IAuthor) => ({ ...a, value: a.name })) || [];
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

  update() {
    if (this.courseId) {
      this.coursesStore.updateCourse({ id: this.courseId, course: this.course });
    }
  }

  create() {
    this.coursesStore.createCourse(this.course);
  }
}
