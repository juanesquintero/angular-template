import { Router } from '@angular/router';
import { fromEvent, debounceTime } from 'rxjs';
import { Component, ElementRef, EventEmitter, Output, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ws-courses-search-section',
  templateUrl: './courses-search-section.component.html',
  styleUrls: ['./courses-search-section.component.scss']
})
export class CoursesSectionComponent implements AfterViewInit {
  @Output('onSearch') search: EventEmitter<string> = new EventEmitter();
  @ViewChild('searchInput') input!: ElementRef;

  constructor(private router: Router) { }

  ngAfterViewInit() {
    const _this = this;
    fromEvent<Event>(this.input.nativeElement, 'keyup')
      .pipe(debounceTime(800))
      .subscribe({
        next(event: Event) {
          _this.onSearch.apply(_this, [event.target]);
        }
      })
  }

  onSearch(target?: any){
    if (!target) target = this.input.nativeElement;
    const text = (target as HTMLInputElement).value.trim();
    if (text.length >= 3 || text.length == 0) {
      this.search.emit(text)
    }
  }

  goToNewCourse(): void {
    this.router.navigate(['courses', 'new'])
  }
}
