import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseItemComponent } from './course-item.component';
import { ICourse } from '@shared/models/course.model';
import { DurationPipe } from '@core/pipes/duration/duration.pipe';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseItemComponent, DurationPipe],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.course = {} as ICourse;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });


  it(`should contain 'ngOnInit'`, () => {
    expect(component.ngOnInit).toBeTruthy();
  });

  it(`should render course 'name' & 'description'`, () => {
    const courseItemHTML = compiled.querySelector('.course-item__content')?.innerHTML;

    expect(courseItemHTML).toContain('<h3');
    expect(courseItemHTML).toContain('<p');
  });

  it(`should render 'load more' button`, () => {
    const actionsHTML = compiled.querySelector('.course-item__actions')?.textContent;
    expect(actionsHTML).toContain('Edit');
    expect(actionsHTML).toContain('Delete');
  });
});
