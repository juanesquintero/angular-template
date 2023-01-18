import { Component, OnInit } from '@angular/core';
import { ICourse } from '@shared/models/course.model';
import { CoursesStore } from '@courses/store/courses.store';
import { Observable } from 'rxjs';

const range = 5;

@Component({
  selector: 'ws-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [CoursesStore],
})
export class CoursesListComponent implements OnInit {
  public courses$: Observable<ICourse[]> = this.coursesStore.courses$;
  public emptyMsg = 'no data feel free to add new course';
  public params = {
    start: 0,
    count: range,
    textFragment: ''
  }

  constructor(
    private coursesStore: CoursesStore,
  ) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.coursesStore.getCourses(this.params);
  }

  onFilter(text: string) {
    this.params.textFragment = text.trim();
    if (text.trim()) {
      this.resetCount();
    }
    this.getCourses();
  }

  onLoadMore() {
    this.params.start += range;
    this.params.count += range;
    this.getCourses();
  }

  resetList() {
    this.resetCount();
    this.getCourses();
  }

  resetCount() {
    this.params.start = 0;
    this.params.count = range;
  };
}
