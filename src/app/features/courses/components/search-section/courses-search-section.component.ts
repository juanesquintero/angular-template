import { Router } from '@angular/router';
import { debounceTime, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Component, EventEmitter, Output, AfterViewInit, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { minLengthTrim } from '@src/app/shared/validators';

@Component({
  selector: 'ws-courses-search-section',
  templateUrl: './courses-search-section.component.html',
  styleUrls: ['./courses-search-section.component.scss']
})
export class CoursesSectionComponent implements AfterViewInit, OnInit {
  @Output('onSearch') search: EventEmitter<string> = new EventEmitter();
  public form: FormGroup = new FormGroup({});
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  public controlName: string = 'searchedText';

  get validInput(): boolean {
    return !!(this.form.get(this.controlName)?.valid);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngAfterViewInit() {
    this.eventListener();
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  initForm(): void {
    this.form = new FormGroup({
      searchedText: new FormControl('', [minLengthTrim(3)]),
    });
  }

  eventListener() {
    this.form.get(this.controlName)?.valueChanges
      .pipe(
        debounceTime(800),
        distinctUntilChanged(),
        takeUntil(this.destroyed$),
      )
      .subscribe((text: string) => {
        if (this.validInput) {
          this.search.emit(text.trim())
        }
      })
  }

  goToNewCourse(): void {
    this.router.navigate(['courses', 'new'])
  }
}
