import { ICourse } from './../../../shared/models/course.model';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';


enum BorderColor {
  fresh = 'green',
  upcoming = 'blue',
  other = 'transparent',
}
@Directive({
  selector: '[wsDateHihglight]'
})
export class DateHihglightDirective implements OnInit {
  @Input('wsDateHihglight') public course!: ICourse;
  private daysLimit = 14;

  get courseTimimg(): keyof typeof BorderColor {
    const creationDate = this.course.creationDate;
    const currentDate = new Date();
    const limitDate = new Date();
    limitDate.setDate(currentDate.getDate() - this.daysLimit);

    if (creationDate < currentDate && creationDate > limitDate) {
      return 'fresh';
    }
    if (creationDate > currentDate) {
      return 'upcoming';
    }
    return 'other';
  }

  get courseBorder(): string {
    return `2px solid ${BorderColor[this.courseTimimg]}`;
  }

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.element.nativeElement.style.border = this.courseBorder;
  }
}
