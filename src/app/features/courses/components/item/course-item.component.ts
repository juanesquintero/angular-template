import { ChangeDetectionStrategy, Component, Input , OnInit } from '@angular/core';
import { ICourse } from '@shared/models/course.model';
import { CoursesStore } from '../../store/courses.store';
import { LocaleService } from '@core/services/locale/locale.service';

@Component({
  selector: 'ws-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit  {
  @Input() course!: ICourse;
  @Input() count!: number;
  messages: Record<string, string> = {};

  constructor(
    private coursesStore: CoursesStore,
    public locale: LocaleService
  ) {}

  ngOnInit(): void {}

  onRemove() {
    const confirmirmation = confirm(
      this.locale.translate('ws.courses.alerts.remove_confirmation')
    );
    const { id } = this.course;
    if (id && confirmirmation) {
      this.coursesStore.deleteCourse({ id, count: this.count });
    } else {
      alert(this.locale.translate('ws.courses.alerts.missing_id_removal'));
    }
  }

}
