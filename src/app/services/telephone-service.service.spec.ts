import { TestBed } from '@angular/core/testing';

import { TelephoneServiceService } from './telephone-service.service';

describe('TelephoneServiceService', () => {
  let service: TelephoneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelephoneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
