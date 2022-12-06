import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseModalComponent } from './course-modal.component';

let dialogRef: jasmine.SpyObj<MatDialogRef<CourseModalComponent>> = jasmine.createSpyObj('MatDialogRef', {
  open: {
    afterClosed: () => ({
      subscribe: (fn: any) => { }
    })
  }
});

describe('CourseModalComponent', () => {
  let component: CourseModalComponent;
  let fixture: ComponentFixture<CourseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseModalComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: dialogRef,
        },
        {
          provide: MatDialogRef,
          useValue: dialogRef,
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: { course: {} }
        },
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CourseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
