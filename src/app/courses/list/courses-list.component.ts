import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { ICourseDTO, ICourseRow, ICoursesTable } from '../../shared/models/courses.model';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  public courses: ICourseDTO[] = [];
  public table: ICoursesTable = { rows: [], columns: [] };
  private rowsFn = (c: ICourseDTO): ICourseRow => (
    { id: c.id, title: c.title, price: c.price }
  );

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe((res: ICourseDTO[]) => {
      this.courses = res;
      this.table.rows = res.map(this.rowsFn);
      this.table.columns = [...Object.keys(this.table.rows[0]), 'actions'];
    });
  }

  openModal(courseId: string) {
    console.log(_.find(this.courses, { id: courseId }))
  }
}
