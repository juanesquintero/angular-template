import { Component, OnInit } from '@angular/core';
import { ICourseDTO } from 'src/app/shared/models/courses.model';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  public courses: ICourseDTO[] = []
  public table: { columns: string[] } = {
    columns: []
  }

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe((res: ICourseDTO[]) => {
      this.courses = res;
      this.table.columns = Object.keys(res[0]) as string[];
    });
  }

}
