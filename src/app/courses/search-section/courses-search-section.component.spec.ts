import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesSectionComponent } from './courses-search-section.component';

describe('CoursesSectionComponent', () => {
  let component: CoursesSectionComponent;
  let fixture: ComponentFixture<CoursesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it(`should contain 'ngOnInit'`, () => {
    expect(component.ngOnInit).toBeTruthy();
  });

  it(`should contain 'searchedText' property`, () => {
    expect(component.searchedText).toBe('');
  });

  describe('onSearch()', () => {
    it(`should be defined`, () => {
      expect(component.onSearch).toBeTruthy();
    });

    it(`should call searchedCourse emit`, () => {
      const spy = spyOn(component.searchedCourse, 'emit');
      component.onSearch();
      expect(spy).toHaveBeenCalledOnceWith(component.searchedText);
    });
  })

  describe('addCours()', () => {
    it(`should be defined`, () => {
      expect(component.addCourse).toBeTruthy();
    });

    it(`should call console.log`, () => {
      const consoleLogSpy = spyOn(console, 'log');
      component.addCourse();
      expect(consoleLogSpy).toHaveBeenCalledOnceWith('Add New Course');
    });
  })
});
