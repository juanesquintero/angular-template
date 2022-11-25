import { of } from 'rxjs';
import * as _ from 'lodash';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesListComponent } from './courses-list.component';
import { CoursesService } from '../courses.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICourseDTO } from './../../shared/models/courses.model';

const dialog: jasmine.SpyObj<MatDialog> = jasmine.createSpyObj('MatDialog', {
  open: {
    afterClosed: () => ({
      subscribe: (fn: any) => { }
    })
  }
});
const snackbar: jasmine.SpyObj<MatSnackBar> = jasmine.createSpyObj('MatSnackBar', {
  open: {
    afterClosed: () => ({
      subscribe: (fn: any) => { }
    })
  }
});
const courseMock: ICourseDTO = {
  id: '123',
  title: 'Course Title',
  description: '',
  hours: 10,
  price: 3023,
}
const service: jasmine.SpyObj<CoursesService> = jasmine.createSpyObj('CoursesService', {
  getCourses: of([courseMock])
});

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesListComponent],
      providers: [
        {
          provide: CoursesService,
          useValue: service,
        },
        {
          provide: MatDialog,
          useValue: dialog,
        },
        {
          provide: MatSnackBar,
          useValue: snackbar,
        },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('getter: isAdmin()', () => {
    expect(component.isAdmin).toBeTruthy();
  });

  describe('ngOnInit()', () => {
    it('should call fetchCourses() service', () => {
      const spy = spyOn(component, 'fetchCourses');
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
    });
  })

  describe('fetchCourses()', () => {
    it('should call getCourses() service', () => {
      component.fetchCourses();
      expect(service.getCourses).toHaveBeenCalled();
    });
  })

  describe('openModal()', () => {
    it(`should find the course selected`, () => {
      const spy = spyOn(_, 'find');
      component.openModal('detail', courseMock.id);
      expect(spy).toHaveBeenCalledWith(component.courses, { id: courseMock.id });
    });

    it(`should open dialog modal`, () => {
      component.openModal('detail');
      expect(dialog.open).toHaveBeenCalled();
    });

    it(`should call 'onCloseModal' method`, () => {
      const spy = spyOn(component, 'onCloseModal');
      component.openModal('detail');
      expect(spy).toHaveBeenCalled();
    });
  })
});
