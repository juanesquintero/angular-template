import { Component, OnInit, Input } from '@angular/core';
import { ICourseDTO } from '@shared/models/courses.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() isAdmin!: boolean;
  @Input() openModal!: any;
  @Input() course!: ICourseDTO;

  constructor() { }

  ngOnInit(): void {}

}
