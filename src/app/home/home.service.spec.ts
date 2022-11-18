import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HomeService } from './home.service';

let httpClientSpy: jasmine.SpyObj<HttpClient>;
httpClientSpy = jasmine.createSpyObj('HttpClient', {
  get: { api: 'name' }
});

describe('HomeService', () => {
  let service: HomeService;

  beforeEach(async () => {
    service = new HomeService(httpClientSpy)
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it(`should have apiPath`, () => {
    expect(service['apiPath']).toEqual(environment.apiPath);
  });

  describe('getAppName()', () => {
    it('should call homeService getAppName() if init', () => {
      service.getAppName();
      expect(httpClientSpy.get).toHaveBeenCalled();
    });
  })
});
