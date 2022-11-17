import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-courses-search-section',
  templateUrl: './courses-search-section.component.html',
  styleUrls: ['./courses-search-section.component.scss']
})
export class CoursesSectionComponent implements OnInit {
  public searchedText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(): void {
    console.log(this.searchedText);
  }

  addCourse(): void {
    console.log('Add New Course');
  }
}
