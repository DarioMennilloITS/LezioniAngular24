import { TestBed } from '@angular/core/testing';

import { MioServiceService } from './mio-service.service';

describe('MioServiceService', () => {
  let service: MioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
