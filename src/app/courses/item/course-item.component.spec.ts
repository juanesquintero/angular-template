import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseItemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });


  it(`should contain 'ngOnInit'`, () => {
    expect(component.ngOnInit).toBeTruthy();
  });

  it(`should render course 'title' & 'description'`, () => {
    const courseItemHTML = compiled.querySelector('.course-item__content')?.innerHTML;
    console.log(courseItemHTML);
    expect(courseItemHTML).toContain('<h2');
    expect(courseItemHTML).toContain('<p');
  });

  it(`should render 'load more' button`, () => {
    const actionsHTML = compiled.querySelector('.course-item__actions')?.textContent;
    expect(actionsHTML).toContain('Edit');
    expect(actionsHTML).toContain('Delete');
  });
});
