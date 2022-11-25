import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICourse } from '@shared/models/course.model';
import { CoursesService } from '@features/courses/services/courses.service';

@Component({
  selector: 'ws-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() course?: ICourse;
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void { }

  onRemove() {
    const confirmirmation = confirm('Do you really want to delete this course? Yes/No');
    if (this.course?.id && confirmirmation) {
      this.coursesService.delete(this.course.id)
        .subscribe(res => {
          this.change.emit(true);
          alert(res);
        })
    } else {
      alert('Error removing course');
    }

  }
}
