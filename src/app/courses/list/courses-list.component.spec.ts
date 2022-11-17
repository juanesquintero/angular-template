import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesListComponent } from './courses-list.component';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesListComponent]
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
      expect(properties).toEqual(['id', 'title', 'creationDate', 'duration', 'description'].sort());
    }
  });

  it(`should render 'load more' button`, () => {
    const loadMoreHTML = compiled.querySelector('.courses-list__load-more')?.textContent;
    expect(loadMoreHTML).toContain('Load More');
  });
});
