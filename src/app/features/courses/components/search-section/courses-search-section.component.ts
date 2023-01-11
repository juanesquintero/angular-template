import { Router } from '@angular/router';
import { fromEvent, debounceTime, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Component, ElementRef, EventEmitter, Output, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ws-courses-search-section',
  templateUrl: './courses-search-section.component.html',
  styleUrls: ['./courses-search-section.component.scss']
})
export class CoursesSectionComponent implements AfterViewInit {
  @Output('onSearch') search: EventEmitter<string> = new EventEmitter();
  @ViewChild('searchInput') input!: ElementRef;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private router: Router) { }

  ngAfterViewInit() {
    this.eventListener();
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  eventListener() {
    fromEvent<Event>(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(800),
        distinctUntilChanged(),
        takeUntil(this.destroyed$),
      )
      .subscribe((event: Event) => {
        const text = (event.target as HTMLInputElement).value.trim();
        if (text.length >= 3 || text.length == 0) {
          this.search.emit(text)
        }
      })
  }

  goToNewCourse(): void {
    this.router.navigate(['courses', 'new'])
  }
}
