import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ws-courses-search-section',
  templateUrl: './courses-search-section.component.html',
  styleUrls: ['./courses-search-section.component.scss']
})
export class CoursesSectionComponent implements OnInit {

  @Output('onSearch') searchedCourse: EventEmitter<string> = new EventEmitter();
  public searchedText: string = '';

  constructor(private router: Router) { }

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
    this.router.navigate(['courses', 'new'])
  }
}
