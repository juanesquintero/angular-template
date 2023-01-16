import { LocaleService } from '@core/services/locale/locale.service';
import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ICourse } from '@shared/models/course.model';
import { CoursesStore } from '../../store/courses.store';

@Component({
  selector: 'ws-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit, OnDestroy  {
  @Input() course!: ICourse;
  @Input() count!: number;

  constructor(
    private coursesStore: CoursesStore,
    public locale: LocaleService
  ) {}

  ngOnInit(): void {
    this.locale.subcribe();
  }

  ngOnDestroy(): void {
    this.locale.unsubscribe();
  }

  onRemove() {
    const confirmirmation = confirm('Do you really want to delete this course? Yes/No');
    const { id } = this.course;
    if (id && confirmirmation) {
      this.coursesStore.deleteCourse({ id, count: this.count });
    } else {
      alert('Not course id to remove');
    }
  }

}
