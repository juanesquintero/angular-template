import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LoginModalComponent } from './auth/login-modal/login-modal.component';

let dialog: jasmine.SpyObj<MatDialog>;
dialog = jasmine.createSpyObj('MatDialog', {
  open: {
    afterClosed: () => ({ subscribe: () => ({}) })
  }
});

fdescribe('AppComponent', () => {
  const title = 'angular-template';
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: MatDialog,
          useValue: dialog,
        },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();
  });

  it(`should have as title '${title}'`, () => {
    expect(app.title).toEqual(title);
  });

  it('should render header title', () => {
    const titleContainerHTML = compiled.querySelector('.app-toolbar__title')?.textContent;
    expect(titleContainerHTML).toContain(`Welcome to ${title}`);
  });

  describe('openLoginModal()', () => {
    it('should call dialog open', () => {
      app.openLoginModal();
      expect(dialog.open).toHaveBeenCalledWith(LoginModalComponent);
    });
  })
});
