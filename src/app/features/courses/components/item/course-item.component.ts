import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICourse } from '@shared/models/course.model';
import { CoursesService } from '@courses/services/courses.service';
import { CoursesStore } from '../../store/courses.store';

@Component({
  selector: 'ws-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
  @Input() course!: ICourse;
  @Input() count!: number;

  constructor(private coursesStore: CoursesStore) { }

  ngOnInit(): void {}

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
