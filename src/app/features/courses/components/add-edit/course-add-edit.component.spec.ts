import { CoursesService } from '@courses/services/courses.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { CourseAddEditComponent } from './course-add-edit.component';

const activatedRoute = {
  snapshot: { data: {}, paramMap: { get: () => null } }
} as unknown as ActivatedRoute;

describe('CourseAddEditComponent', () => {
  let component: CourseAddEditComponent;
  let fixture: ComponentFixture<CourseAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseAddEditComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        CoursesService,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
