import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const title = 'Video Course';
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;
  let appHTML: string | undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;

    compiled = fixture.nativeElement as HTMLElement;
    appHTML = compiled.querySelector('.app')?.innerHTML;

    fixture.detectChanges();
  });

  it(`should have as title '${title}'`, () => {
    expect(app.title).toEqual(title);
  });

  it('should render header', () => {
    expect(appHTML).toContain('<ws-header');
  });

  it('should render breadcrumbs', () => {
    expect(appHTML).toContain('<ws-breadcrumbs');
  });
});
