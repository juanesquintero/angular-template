import { LocaleService } from '@core/services/locale/locale.service';
import { CoursesStore } from '@courses/store/courses.store';
import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'lodash-es';
import { ActivatedRoute } from '@angular/router';
import { ACTIONS, COURSE_ACTIONS } from '@src/app/shared/utils/constants';
import { AuthorsService } from '@core/services/authors/authors.service';
import { IAuthor, IAuthorOpt, ICourse, ICourseAction } from '@shared/models/course.model';
import { Observable } from 'rxjs';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { makeStateKey, TransferState } from '@angular/platform-browser';

type authorsType = IAuthor[] | null;
const AUTHORS_KEY = makeStateKey<authorsType>('authors');


@Component({
  selector: 'ws-course-add-edit',
  templateUrl: './course-add-edit.component.html',
  styleUrls: ['./course-add-edit.component.scss'],
  providers: [CoursesStore],
})
export class CourseAddEditComponent implements OnInit {
  public course$: Observable<ICourse> = this.coursesStore.course$;
  public form: FormGroup = new FormGroup({});

  public action!: ICourseAction;
  public courseId?: number;
  private _authors?: authorsType;

  public tagsOptions?: any;
  public authorsSelected?: IAuthorOpt[];
  public authorsOptions?: IAuthorOpt[];

  get name(): AbstractControl | null {
    return this.form.get('name');
  }

  get description(): AbstractControl | null {
    return this.form.get('description');
  }

  get length(): AbstractControl | null {
    return this.form.get('length');
  }

  get date(): AbstractControl | null {
    return this.form.get('date');
  }

  get authors(): AbstractControl | null {
    return this.form.get('authors');
  }

  get isEdition(): boolean {
    return this.action?.value == ACTIONS.edit;
  }

  get isAddition(): boolean {
    return this.action?.value == ACTIONS.add;
  }

  constructor(
    private route: ActivatedRoute,
    private authorsService: AuthorsService,
    private coursesStore: CoursesStore,
    private locale: LocaleService,
    private state: TransferState,
  ) {
    this.defineAction();
    this.defineCourse();
    this.getAuthors();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(course?: ICourse): void {
    this.form = new FormGroup({
      name: new FormControl(course?.name || '', [Validators.required, Validators.maxLength(50)]),
      description: new FormControl(course?.description || '', [Validators.required, Validators.maxLength(500)]),
      length: new FormControl(course?.length || null, [Validators.required, Validators.min(15)]),
      date: new FormControl((course?.date as string)?.split('T')[0] || '', Validators.required),
      authors: new FormControl(course?.authors || [], Validators.required),
    });
  }

  defineCourse(): void {
    if (this.isEdition) {
      this.courseId = Number(this.route.snapshot.paramMap.get('id')) || 0;
      this.coursesStore.getCourse(this.courseId);
      this.getCourse();
    }
  }

  defineAction(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      this.action = COURSE_ACTIONS.edit;
    } else {
      this.action = COURSE_ACTIONS.add;
    }
  }

  getCourse(): void {
    if (this.courseId && this.course$) {
      this.course$.subscribe((course: ICourse) => {
        this.initForm(course);
        this.authorsSelected = course.authors?.map(
          (a: IAuthor) => {
            const name = a.name + ' ' + a.lastName;
            return { id: String(a.id), name, value: name }
          }
        ) || [];
      });
    }
  }

  getAuthors(): void {
    this._authors = this.state.get<authorsType>(AUTHORS_KEY, null);
    if (!this._authors) {
      this.authorsService.getList().subscribe(res => {
        this._authors = res;
        this.state.set<authorsType>(AUTHORS_KEY, res);
        this.authorsOptions = this._authors.map((a: IAuthor) => ({ ...a, value: a.name })) || [];
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) {
      alert(this.locale.translate('ws.courses.alerts.invalid_course'));
      return;
    }
    if (this.isEdition) {
      this.update();
    } else if (this.isAddition) {
      this.create();
    } else {
      alert(this.locale.translate('ws.courses.alerts.specify_action'));
    }
  }

  update(): void {
    if (this.courseId) {
      this.coursesStore.updateCourse({ id: this.courseId, course: this.form.value });
    }
  }

  create(): void {
    this.coursesStore.createCourse(this.form.value);
  }
}
