import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesListComponent } from './courses-list.component';
import { OrderByPipe } from '@core/pipes/order-by/order-by.pipe';
import { FilterByPipe } from '@core/pipes/filter-by/filter-by.pipe';
import { CoursesService } from '@courses/services/courses.service';
import { AuthService } from '@src/app/core/services/auth/auth.service';
import { IfAuthenticatedDirective } from '@src/app/core/directives/if-authenticated/if-authenticated.directive';

const authService: AuthService= jasmine.createSpyObj('AuthService', {
  isAuthenticated: true
});

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CoursesListComponent,
        OrderByPipe,
        FilterByPipe,
        IfAuthenticatedDirective
      ],
      providers: [
        FilterByPipe,
        CoursesService,
        { provide: AuthService, use: authService }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });


  it(`should contain 'ngOnInit'`, () => {
    expect(component.ngOnInit).toBeTruthy();
  });

  it(`should contain 'courses' list property `, () => {
    expect(component.courses).toBeTruthy();
    expect(component.courses).toEqual(jasmine.any(Array));
  });

  it(`should contain 'courses' list elements`, () => {
    if (component.courses) {
      const properties = Object.keys(component.courses[0]).sort();
      expect(properties).toEqual(['id', 'name', 'creationDate', 'duration', 'description'].sort());
    }
  });
});
