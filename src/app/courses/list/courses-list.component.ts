import { Component, OnInit } from '@angular/core';
import { coursesMock } from './../../shared/mocks/courses.mock';
import { ICourse } from '../../shared/models/course.model';

@Component({
  selector: 'ws-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  public courses: ICourse[] = coursesMock;

  constructor() { }

  ngOnInit(): void {
  }

}
