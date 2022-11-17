import { ICourse } from './../../shared/models/course.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ws-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

  @Input() course: ICourse;

  constructor() {
    this.course = {} as ICourse;
  }

  ngOnInit(): void {
  }
}
