import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { APP_NAME } from '../shared/constants';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

let service: jasmine.SpyObj<HomeService>;
service = jasmine.createSpyObj('HomeService', {
  getAppName: of({ api: 'name' })
});

const title = APP_NAME;

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HomeComponent
      ],
      providers: [
        {
          provide: HomeService,
          useValue: service,
        },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title '${title}'`, () => {
    expect(component.title).toEqual(title);
  });

  it(`should have 'ngOnInit' method`, () => {
    expect(component.ngOnInit).toBeTruthy();
  });

  it(`should have getter: init`, () => {
    expect(component.init).toBeTruthy();
  });

  describe('showAppName()', () => {
    it('should call homeService getAppName() if init', () => {
      console.log(service.getAppName().subscribe());
      component.showAppName();
      expect(service.getAppName).toHaveBeenCalled();
    });
  })
});
