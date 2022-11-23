import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../shared/models/course.model';
import { coursesMock } from './../../shared/mocks/courses.mock';
import { FilterPipeBy } from './../../core/pipes/filter-by/filter-by.pipe';

@Component({
  selector: 'ws-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  public courses: ICourse[] = coursesMock;
  public coursesFiltered: ICourse[] = this.courses;
  public emptyMsg = 'no data feel free to add new course';

  constructor(
    private filterBy: FilterPipeBy
  ) { }

  ngOnInit(): void {
  }

  get isCoursesExist(): boolean {
    return !!(this.coursesFiltered?.length);
  }

  onFilter(text: string) {
    if (text.trim()) {
      this.coursesFiltered = this.filterBy.transform(this.courses, 'LIKE', text, 'title');
    } else {
      this.coursesFiltered = this.courses;
    }
  }
}
