import { TestBed } from '@angular/core/testing';
import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ CoursesService ]
    });
    service = TestBed.inject(CoursesService);
  });

  it(`should have 'getList' method`, () => {
    expect(service.getList).toBeTruthy();
  });

  it(`should have 'getOne' method`, () => {
    expect(service.getOne).toBeTruthy();
  });

  it(`should have 'create' method`, () => {
    expect(service.create).toBeTruthy();
  });

  it(`should have 'update' method`, () => {
    expect(service.update).toBeTruthy();
  });

  it(`should have 'delete' method`, () => {
    expect(service.delete).toBeTruthy();
  });
});
