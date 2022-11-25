import { Component, OnInit } from '@angular/core';
import { ICourse } from '@shared/models/course.model';
import { FilterPipeBy } from '@core/pipes/filter-by/filter-by.pipe';
import { CoursesService } from '@features/courses/services/courses.service';

@Component({
  selector: 'ws-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  public courses?: ICourse[];
  public coursesFiltered?: ICourse[];
  public emptyMsg = 'no data feel free to add new course';

  constructor(
    private filterBy: FilterPipeBy,
    private coursesService: CoursesService,
  ) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.coursesService.getAll().subscribe(res => {
      this.courses = res;
      this.coursesFiltered = res;
    });
  }

  get isCoursesExist(): boolean {
    return !!(this.coursesFiltered?.length);
  }

  onFilter(text: string) {
    if (text.trim()) {
      this.coursesFiltered = this.filterBy.transform(this.courses || [], 'LIKE', text, 'title');
    } else {
      this.coursesFiltered = this.courses;
    }
  }
}
