import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StoreModule } from '@ngrx/store';
import { LoginModalComponent } from './login-modal.component';

const dialogRef: jasmine.SpyObj<MatDialogRef<LoginModalComponent>> = jasmine.createSpyObj('MatDialogRef', {
  open: {
    afterClosed: () => ({
      subscribe: (fn: any) => { }
    })
  }
});
const formBuilder: jasmine.SpyObj<FormBuilder> = jasmine.createSpyObj('FormBuilder', { group: [{}] });
const snackbar: jasmine.SpyObj<MatSnackBar> = jasmine.createSpyObj('MatSnackBar', {
  open: {
    afterClosed: () => ({
      subscribe: (fn: any) => { }
    })
  }
});

describe('LoginModalComponent', () => {
  let component: LoginModalComponent;
  let fixture: ComponentFixture<LoginModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginModalComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: dialogRef,
        },
        {
          provide: FormBuilder,
          useValue: formBuilder,
        },
        {
          provide: MatSnackBar,
          useValue: snackbar,
        },
      ],
      imports: [StoreModule.forRoot({})]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
