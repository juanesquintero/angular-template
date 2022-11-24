import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesListComponent } from './courses-list.component';
import { CoursesService } from '../courses.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';

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

const service: jasmine.SpyObj<CoursesService> = jasmine.createSpyObj('CoursesService', {
  getCourses: of([])
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

  it('should contain isAdmin', () => {
    expect(component.isAdmin).toBeTruthy();
  });

  it('should contain ngOnInit method', () => {
    component.ngOnInit();
    expect(service.getCourses).toHaveBeenCalled();
  });
});
