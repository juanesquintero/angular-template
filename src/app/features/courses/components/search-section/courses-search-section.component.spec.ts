import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CoursesSectionComponent } from './courses-search-section.component';

const router = {
  navigate: jasmine.createSpy('navigate'),
}

describe('CoursesSectionComponent', () => {
  let component: CoursesSectionComponent;
  let fixture: ComponentFixture<CoursesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesSectionComponent, ],
      providers: [ {provide: Router, useValue: router} ],
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

  describe('addCourse()', () => {
    it(`should be defined`, () => {
      expect(component.addCourse).toBeTruthy();
    });

    it(`should call console.log`, () => {
      const spy = spyOn(console, 'log');
      component.addCourse();
      expect(spy).toHaveBeenCalledOnceWith('Add New Course');
    });

    it(`should navigate to 'new course' page`, () => {
      router.navigate.calls.reset();
      component.addCourse();
      expect(router.navigate).toHaveBeenCalledOnceWith(['courses', 'new']);
    });
  })
});
