import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ws-courses-search-section',
  templateUrl: './courses-search-section.component.html',
  styleUrls: ['./courses-search-section.component.scss']
})
export class CoursesSectionComponent implements OnInit {

  @Output('onSearch') searchedCourse: EventEmitter<string> = new EventEmitter();
  public searchedText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onChange(): void {
    if (!this.searchedText.trim()) {
      this.onSearch();
    }
  }

  onSearch(): void {
    this.searchedCourse.emit(this.searchedText);
  }

  addCourse(): void {
    console.log('Add New Course');
  }
}
