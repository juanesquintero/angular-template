import { TestBed } from '@angular/core/testing';

import { AuthorsService } from './authors.service';

describe('AuthorsService', () => {
  let service: AuthorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorsService]
    });
    service = TestBed.inject(AuthorsService);
  });

  it(`should have 'getList' method`, () => {
    expect(service.getList).toBeTruthy();
  });
});
