import { Component, OnInit } from '@angular/core';
import { ICourse } from '@shared/models/course.model';
import { CoursesService } from '@courses/services/courses.service';

const range = 5;

@Component({
  selector: 'ws-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  public courses?: ICourse[];
  public coursesFiltered?: ICourse[];
  public emptyMsg = 'no data feel free to add new course';
  public start = 0;
  public count = range;

  constructor(
    private coursesService: CoursesService,
  ) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(textFragment?: string): void {
    this.coursesService.getList(
      this.start,
      this.count,
      textFragment
    ).subscribe(res => {
      this.courses = res;
      this.coursesFiltered = res;
    });
  }

  get isCoursesExist(): boolean {
    return !!(this.coursesFiltered?.length);
  }

  onFilter(text: string) {
    if (text.trim()) {
      this.resetCount();
      this.getCourses(text);
    } else {
      this.getCourses();
    }
  }

  onRemove(id: number) {
    if (id) {
      this.coursesService.delete(id)
      .subscribe(res => {
        alert(id + ' Deleted!');
        this.resetList();
      })
    } else {
      alert('Error removing course');
    }
  }

  onLoadMore() {
    this.start += range;
    this.count += range;
    this.getCourses();
  }

  resetList() {
    this.resetCount();
    this.getCourses();
  }

  resetCount(){
    this.start = 0;
    this.count = range;
  };
}
