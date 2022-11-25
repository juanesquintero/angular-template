import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
  });

  it(`should have 'login' method`, () => {
    expect(service.login).toBeTruthy();
  });

  it(`should have 'logout' method`, () => {
    expect(service.logout).toBeTruthy();
  });

  it(`should have 'getUserInfo' method`, () => {
    expect(service.getUserInfo).toBeTruthy();
  });

  it(`should have 'isAuthenticated' property`, () => {
    expect(service.isAuthenticated).toBeTruthy();
  });
});
