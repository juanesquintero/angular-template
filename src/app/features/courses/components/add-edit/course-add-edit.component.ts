import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ACTIONS, COURSE_ACTIONS } from '@src/app/shared/constants';
import { ICourse, ICourseAction } from '@shared/models/course.model';
import { CoursesService } from '@courses/services/courses.service';


@Component({
  selector: 'ws-course-add-edit',
  templateUrl: './course-add-edit.component.html',
  styleUrls: ['./course-add-edit.component.scss']
})
export class CourseAddEditComponent implements OnInit {
  public action?: ICourseAction;
  public course?: ICourse;
  public courseId?: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService,
  ) {
    this.defineAction();
    if (this.isEdition) {
      this.getCourse();
    }
  }

  get isEdition(): boolean {
    return this.action?.value == ACTIONS.edit;
  }

  get isAddition(): boolean {
    return this.action?.value == ACTIONS.add;
  }

  ngOnInit(): void { }

  defineAction() {
    if(this.route.snapshot.paramMap.get('id')) {
      this.action = COURSE_ACTIONS.edit;
    } else {
      this.action = COURSE_ACTIONS.add;
    }
  }

  getCourse(): void {
    this.courseId = this.route.snapshot.paramMap.get('id') || '';
    if (this.courseId) {
      this.coursesService.getOne(this.courseId).subscribe(course => {
        this.course = course;
      });
    }
  }

  onSubmit(): void {
    if (this.course) {
      if (this.isEdition) {
        this.coursesService.update(this.courseId || '', this.course);
      } else if (this.isAddition) {
        this.coursesService.create(this.course)
      } else {
        alert('Please specify valid action');
      }
    } else {
      alert('Invalid Course');
    }
    this.router.navigate(['courses'])
  }
}
