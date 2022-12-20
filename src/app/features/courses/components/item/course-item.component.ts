import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICourse } from '@shared/models/course.model';
import { CoursesService } from '@courses/services/courses.service';

@Component({
  selector: 'ws-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
  @Input() course?: ICourse;
  @Output() remove: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onRemove() {
    const confirmirmation = confirm('Do you really want to delete this course? Yes/No');
    if (this.course?.id && confirmirmation) {
      this.remove.emit(this.course.id);
    }
  }
}
